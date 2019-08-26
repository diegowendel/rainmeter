import React from 'react';
import Highcharts from 'highcharts';
import highchartsVector from 'highcharts/modules/vector';
import HighchartsReact from 'highcharts-react-official';

highchartsVector(Highcharts);

const ForecastChart = ({ options, shift }) => {
  return (
    <div className="forecast-chart">
      <HighchartsReact containerProps={{className: shift}}
        highcharts={Highcharts}
        options={options} />
    </div>
  );
}

export default ForecastChart;
