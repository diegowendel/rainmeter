import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import ForecastChart from './ForecastChart';
import ForecastDetails from './ForecastDetails';
import TemperatureCard from './TemperatureCard';
import Highcharts from 'highcharts';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      day: props.forecast.data[0],
      isCelsiusScale: true,
      selected: 0,
      shiftClass: "shift0",
      options: {
        chart: {
          width: 3500,
          height: 100,
          type: 'area',
          animation: Highcharts.svg, // don't animate in old IE
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
          area: {
              dataLabels: {
                  enabled: true
              },
              marker: {
                enabled: false
              },
              enableMouseTracking: false
          }
        },
        series: [
          {
            name: 'Climatempo data',
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
            }())
          }
        ]
      }
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
  }

  handleOnClick(index, day) {
    this.setState({ selected: index, day, shiftClass: `shift${index}` });
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
        <ForecastDetails day={this.state.day} isCelsiusScale={this.state.isCelsiusScale} onChangeScale={this.onChangeScale} />
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
