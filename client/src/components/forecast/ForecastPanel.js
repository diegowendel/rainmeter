import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import ForecastChart from './ForecastChart';
import ForecastDetails from './ForecastDetails';
import TemperatureCard from './TemperatureCard';
import Highcharts, { chart, rectangle } from 'highcharts';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);


    this.state = {
      day: props.forecast.data[0],
      isCelsiusScale: true,
      selected: 0,
      options: {
        chart: {
          height: 100,
          type: 'area',
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
              load: function () {

                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.floor(Math.random() * (40 - 10 + 1)) + 10
                      series.addPoint([x, y], true, true);
                  }, 1000);
              },
              selection: function(event) {
              var xMin = chart.xAxis[0].translate((event.xAxis[0]||chart.xAxis[0]).min),
                  xMax = chart.xAxis[0].translate((event.xAxis[0]||chart.xAxis[0]).max),
                  yMin = chart.yAxis[0].translate((event.yAxis[0]||chart.yAxis[0]).min),
                  yMax = chart.yAxis[0].translate((event.yAxis[0]||chart.yAxis[0]).max);

              rectangle.attr({
                  x: xMin + chart.plotLeft,
                  y: chart.plotHeight + chart.plotTop - yMax,
                  width: xMax - xMin,
                  height: yMax - yMin
              });

              return false;
            }
          },
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
        series: [{
          name: 'Random data',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -8; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: Math.floor(Math.random() * (40 - 10 + 1)) + 10
                  });
              }
              return data;
          }())
      }]
      }
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.onChangeScale = this.onChangeScale.bind(this);
  }

  handleOnClick(index, day) {
    const { temperature } = day;
    const dayTemperatures = [
      {
        data: [
          temperature.dawn.max,
          temperature.morning.max,
          temperature.afternoon.max,
          temperature.night.max,
          20,21,30,25,20,11,15,18,10,19
        ]
      }
    ];
    let options = {...this.state.options};
    options.series = dayTemperatures;
    this.setState({ selected: index, day, options });
  }

  onChangeScale() {
    this.setState({ isCelsiusScale: !this.state.isCelsiusScale });
  }

  render() {
    return (
      <div className="forecast-panel">
        <ForecastDetails day={this.state.day} isCelsiusScale={this.state.isCelsiusScale} onChangeScale={this.onChangeScale} />
        <ForecastChart options={this.state.options} />
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
                  min={day.temperature.min} />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};

export default ForecastPanel;
