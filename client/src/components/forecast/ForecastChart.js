import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ForecastChart extends Component {

  render() {
    return (
      <div className="forecast-chart">
        <HighchartsReact containerProps={{className: this.props.shift}}
          highcharts={Highcharts}
          options={this.props.options} />
      </div>
    );
  }
}

export default ForecastChart;