import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import TemperatureHighlight from './TemperatureHighlight';
import WindSpeed from './WindSpeed';

class ForecastDetails extends Component {

  render() {
    const { day, isCelsiusScale, onChangeScale } = this.props;
    const { date, humidity, rain, temperature, text_icon, wind } = day;
    return (
      <div className="forecast-panel-details">
        <div className="flex-column">
          <div className="flex-column forecast-panel-details-info">
            <span>{DateUtils.getDayOfWeek(date)}</span>
            <span>{text_icon.text.pt}</span>
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
          <span>Chuva: {rain.probability}%</span>
          <span>Umidade: {humidity.max}%</span>
          <WindSpeed isCelsiusScale={isCelsiusScale} speed={wind.velocity_avg} />
          <div className="btn-group-chart">
            <button className="btn-chart" onClick={() => this.props.onChangeChart(0)}>Temperatura</button>
            <button className="btn-chart" onClick={() => this.props.onChangeChart(1)}>Umidade</button>
            <button className="btn-chart" onClick={() => this.props.onChangeChart(2)}>Vento</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastDetails;
