import React from 'react';
import { FormattedMessage } from 'react-intl';
import DateUtils from '../../utils/DateUtils';
import TemperatureHighlight from './TemperatureHighlight';
import WindSpeed from './WindSpeed';

const ForecastDetails = ({ chartSelected, day, isCelsiusScale, locale, name, onChangeChart, onChangeScale, state }) => {
  const { date, humidity, rain, temperature, text_icon, wind } = day;
  return (
    <div className="forecast-panel-details">
      <div className="flex-column">
        <div className="flex-column forecast-panel-details-info">
          <span>{`${name} - ${state}`}</span>
          <span>{DateUtils.getDayOfWeek(date)}</span>
          <span>{locale.startsWith("en") ? text_icon.text.en : text_icon.text.pt}</span>
        </div>
        <div className="flex-row">
          <img src={`${process.env.PUBLIC_URL}/img/${text_icon.icon.day}.svg`}
            alt="Logo"
            className="icon" />
          <TemperatureHighlight isCelsiusScale={isCelsiusScale}
            temperature={temperature.max}
            temperaturef={temperature.maxf} />
          <div className="temperature-scales-toggle">
            <span className={isCelsiusScale ? "temperature-active" : "temperature-inactive"} onClick={isCelsiusScale ? null : onChangeScale}>ºC</span>
            <span>&nbsp;|&nbsp;</span>
            <span className={isCelsiusScale ? "temperature-inactive" : "temperature-active"} onClick={isCelsiusScale ? onChangeScale : null}>ºF</span>
          </div>
        </div>
      </div>
      <div className="flex-column forecast-panel-details-info-right">
        <span><FormattedMessage id="ForecastDetails.rain" />: {rain.probability}%</span>
        <span><FormattedMessage id="ForecastDetails.humidity" />: {humidity.max}%</span>
        <WindSpeed isCelsiusScale={isCelsiusScale} velocity={wind.velocity_avg} />
        <div className="btn-group-chart">
          <button className={chartSelected === 0 ? "btn-chart-active" : "btn-chart"} onClick={() => onChangeChart(0)}><FormattedMessage id="ForecastDetails.temperature" /></button>
          <button className={chartSelected === 1 ? "btn-chart-active" : "btn-chart"} onClick={() => onChangeChart(1)}><FormattedMessage id="ForecastDetails.humidity" /></button>
          <button className={chartSelected === 2 ? "btn-chart-active" : "btn-chart"} onClick={() => onChangeChart(2)}><FormattedMessage id="ForecastDetails.wind" /></button>
        </div>
      </div>
    </div>
  );
};

export default ForecastDetails;
