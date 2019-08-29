import React, { Component } from 'react';
import ForecastCards from './ForecastCards';
import ForecastChart from './ForecastChart';
import ForecastDetails from './ForecastDetails';
import '../../styles/Forecast.scss';

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
          width: 3821,
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
            allowDecimals: false,
            categories: props.forecast.categories,
            labels: {
              style: {
                color: '#bababa'
              }
            },
            lineWidth: 0,
            visible: true
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
          },
          vector: {
            dataLabels: {
              color: '#878787',
              enabled: true,
              padding: 20
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
            color: '#878787',
            dataLabels: [{
              format: '{point.length}km/h',
              verticalAlign: 'top'
            }],
            data: (function () {
                let data = [];
                for (let day of props.forecast.data) {
                  let wind = day.wind;
                  data.push({
                    y: 1,
                    length: wind.dawn.velocity_avg,
                    direction: wind.dawn.direction_degrees,
                    mph: wind.dawn.mph
                  });
                  data.push({
                    y: 1,
                    length: wind.morning.velocity_avg,
                    direction: wind.morning.direction_degrees,
                    mph: wind.morning.mph
                  });
                  data.push({
                    y: 1,
                    length: wind.afternoon.velocity_avg,
                    direction: wind.afternoon.direction_degrees,
                    mph: wind.afternoon.mph
                  });
                  data.push({
                    y: 1,
                    length: wind.night.velocity_avg,
                    direction: wind.night.direction_degrees,
                    mph: wind.night.mph
                  });
                };
                return data;
            }()),
            type: 'vector',
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
    let serie0, serie2, options = {...this.state.options};
    serie0 = options.series[0];
    serie2 = options.series[2];

    if (this.state.isCelsiusScale) {
      serie0.dataLabels = [{ format: '{point.fahrenheit}' }];
      serie2.dataLabels = [{ format: '{point.mph}mph', verticalAlign: 'top' }];
    } else {
      serie0.dataLabels = [{ format: '{point.celsius}' }];
      serie2.dataLabels = [{ format: '{point.length}km/h', verticalAlign: 'top' }];
    }

    options.series[0] = serie0;
    options.series[2] = serie2;
    this.setState({ isCelsiusScale: !this.state.isCelsiusScale, options });
  }

  render() {
    const { data, name, state } = this.props.forecast;
    return (
      <div className="forecast-panel">
        <ForecastDetails chartSelected={this.state.chartSelected}
          day={this.state.day}
          name={name} state={state}
          isCelsiusScale={this.state.isCelsiusScale}
          locale={this.props.locale}
          onChangeChart={this.onChangeChart}
          onChangeScale={this.onChangeScale} />
        <ForecastChart options={this.state.options}
          shift={this.state.shiftClass} />
        <ForecastCards data={data}
          handleOnClick={this.handleOnClick}
          isCelsiusScale={this.state.isCelsiusScale}
          selected={this.state.selected} />
      </div>
    );
  }
};

export default ForecastPanel;
