import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import ForecastChart from './ForecastChart';
import ForecastDetails from './ForecastDetails';
import TemperatureCard from './TemperatureCard';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chartSelected: 0,
      day: props.forecast.data[0],
      isCelsiusScale: true,
      selected: 0,
      shiftClass: "shift0",
      options: {
        chart: {
          animation: false,
          height: 100,
          width: 3500,
          zoomType: null
        },
        credits: {
          enabled: false
        },
        title: {
          text: null
        },
        tooltip: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        xAxis: [
          {
            visible: false
          }
        ],
        yAxis: [
          {
            visible: false
          }
        ],
        plotOptions: {
          series: {
            enableMouseTracking: false,
            marker: {
              enabled: false
            }
          },
          area: {
            dataLabels: {
              color: '#878787',
              enabled: true
            }
          }
        },
        series: [
          {
            name: 'Temperatura',
            color: '#FFF4D6',
            dataLabels: [{
              format: '{point.celsius}'
            }],
            data: (function () {
                let data = [];
                for (let day of props.forecast.data) {
                  let temperature = day.temperature;
                  data.push({
                    celsius: temperature.dawn.max,
                    fahrenheit: temperature.dawn.maxf,
                    y: temperature.dawn.max
                  });
                  data.push({
                    celsius: temperature.morning.max,
                    fahrenheit: temperature.morning.maxf,
                    y: temperature.morning.max
                  });
                  data.push({
                    celsius: temperature.afternoon.max,
                    fahrenheit: temperature.afternoon.maxf,
                    y: temperature.afternoon.max
                  });
                  data.push({
                    celsius: temperature.night.max,
                    fahrenheit: temperature.night.maxf,
                    y: temperature.night.max
                  });
                };
                return data;
            }()),
            lineColor: '#FCCB00',
            type: 'area',
            visible: true
          },
          {
            name: 'Chuva',
            color: '#e3f2fd',
            dataLabels: [{
              format: '{point.y}%'
            }],
            data: (function () {
                let data = [];
                for (let day of props.forecast.data) {
                  let humidity = day.humidity;
                  data.push({
                    y: humidity.dawn.max
                  });
                  data.push({
                    y: humidity.morning.max
                  });
                  data.push({
                    y: humidity.afternoon.max
                  });
                  data.push({
                    y: humidity.night.max
                  });
                };
                return data;
            }()),
            lineColor: '#90caf9',
            type: 'area',
            visible: false
          },
          {
            name: 'Vento',
            dataLabels: [{
              format: '({point.celsius})'
            }],
            data: (function () {
                let data = [];
                for (let day of props.forecast.data) {
                  let wind = day.wind;
                  data.push([
                    wind.dawn.velocity_avg,
                    wind.dawn.direction_degrees
                  ]);
                  // data.push({
                  //   direction: wind.morning.velocity_avg,
                  //   value: wind.morning.direction_degrees
                  // });
                  // data.push({
                  //   direction: wind.afternoon.velocity_avg,
                  //   value: wind.afternoon.direction_degrees
                  // });
                  // data.push({
                  //   direction: wind.night.velocity_avg,
                  //   value: wind.night.direction_degrees
                  // });
                };
                return data;
            }()),
            visible: false
          }
        ]
      }
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeChart = this.onChangeChart.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
  }

  handleOnClick(index, day) {
    this.setState({ selected: index, day, shiftClass: `shift${index}` });
  }

  onChangeChart(chartSelected) {
    let series, options = {...this.state.options};
    series = options.series.map((serie, index) => {
      serie.visible = index === chartSelected ? true : false;
      return serie;
    });
    options.series = series;
    this.setState({ chartSelected, options });
  }

  onChangeScale() {
    let serie, options = {...this.state.options};
    serie = options.series[0];
    if (this.state.isCelsiusScale) {
      serie.dataLabels = [{
        format: '{point.fahrenheit}'
      }];
    } else {
      serie.dataLabels = [{
        format: '{point.celsius}'
      }];
    }
    options.series[0] = serie;
    this.setState({ isCelsiusScale: !this.state.isCelsiusScale, options });
  }

  render() {
    return (
      <div className="forecast-panel">
        <ForecastDetails day={this.state.day}
          isCelsiusScale={this.state.isCelsiusScale}
          onChangeChart={this.onChangeChart}
          onChangeScale={this.onChangeScale} />
        <ForecastChart options={this.state.options} shift={this.state.shiftClass} />
        <div className="forecast-cards">
          {this.props.forecast.data.map((day, index) => {
            const classForecastDay = this.state.selected === index ? "forecast-card clicable forecast-selected-day" : "forecast-card clicable";
            return (
              <div key={index} className={classForecastDay} onClick={() => this.handleOnClick(index, day)}>
                <span className="forecast-weekday">{DateUtils.getDayOfWeekShort(day.date)}</span>
                <img src={`${process.env.PUBLIC_URL}/img/${day.text_icon.icon.day}.svg`}
                  alt="Logo"
                  className="card-icon" />
                <TemperatureCard isCelsiusScale={this.state.isCelsiusScale}
                  max={day.temperature.max}
                  maxf={day.temperature.maxf}
                  min={day.temperature.min}
                  minf={day.temperature.minf} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};

export default ForecastPanel;
