import React from 'react';
import ForecastRain from './ForecastRain';
import ForecastWind from './ForecastWind';
import DateUtils from '../../utils/DateUtils';

const ForecastPanel = (props) => {
  const forecast = props.forecast;
  console.log(props.forecast)
  return (
    <div className="forecast-panel">
      {forecast.data.map((day, index) => {
        return (
          <div key={index} className="forecast-item">
            <p>{DateUtils.getDayOfWeekPTBR(day.date)}</p>
            <ForecastWind wind={day.wind} />
            <ForecastRain rain={day.rain} />
            <div className="forecast-temperature">
              <p>{day.temperature.min}°</p>
              <p>{day.temperature.max}°</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ForecastPanel;
