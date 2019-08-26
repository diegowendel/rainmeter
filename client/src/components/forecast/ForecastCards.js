import React from 'react';
import DateUtils from '../../utils/DateUtils';
import TemperatureCard from './TemperatureCard';

const ForecastCards = ({ data, handleOnClick, isCelsiusScale, selected }) => {
  return (
    <div className="forecast-cards">
      {data.map((day, index) => {
        const classForecastDay = selected === index ? "forecast-card clicable forecast-selected-day" : "forecast-card clicable";
        return (
          <div key={index} className={classForecastDay} onClick={() => handleOnClick(index, day)}>
            <span className="forecast-weekday">{DateUtils.getDayOfWeekShort(day.date)}</span>
            <img src={`${process.env.PUBLIC_URL}/img/${day.text_icon.icon.day}.svg`}
              alt="Logo"
              className="card-icon" />
            <TemperatureCard isCelsiusScale={isCelsiusScale}
              max={day.temperature.max}
              maxf={day.temperature.maxf}
              min={day.temperature.min}
              minf={day.temperature.minf} />
          </div>
        )
      })}
    </div>
  );
};

export default ForecastCards;
