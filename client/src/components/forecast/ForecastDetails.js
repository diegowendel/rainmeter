import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';

class ForecastDetails extends Component {

  render() {
    const { date, humidity, rain, temperature, text_icon, wind } = this.props.day;
    return (
      <div className="container-fluid forecast-panel-details">
        <div className="flex-column">
          <div className="flex-column forecast-panel-details-info">
            <span>{DateUtils.getDayOfWeek(date)}</span>
            <span>{text_icon.text.pt}</span>
          </div>
          <div>
            <span className="forecast-temperature-highlight">{temperature.max}ºC</span>
          </div>
        </div>
        <div className="flex-column forecast-panel-details-info">
          <span>Chuva: {rain.probability}%</span>
          <span>Umidade: {humidity.max}%</span>
          <span>Vento: {wind.velocity_avg} km/h</span>
        </div>
      </div>
    );
  }
}

export default ForecastDetails;
