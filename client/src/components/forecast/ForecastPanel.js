import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import ForecastDetails from './ForecastDetails';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      day: props.forecast.data[0],
      selected: 0
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index, day) {
    this.setState({ selected: index, day: day });
  }

  render() {
    return (
      <div className="forecast-panel">
        <ForecastDetails day={this.state.day} />
        <div className="forecast-cards">
          {this.props.forecast.data.map((day, index) => {
            const classForecastDay = this.state.selected === index ? "forecast-card clicable forecast-selected-day" : "forecast-card clicable";
            return (
              <div key={index} className={classForecastDay} onClick={() => this.handleOnClick(index, day)}>
                <span className="forecast-weekday">{DateUtils.getDayOfWeekShort(day.date)}</span>
                <img src={`${process.env.PUBLIC_URL}/img/${day.text_icon.icon.day}.svg`}
                  alt="Logo"
                  className="card-icon" />
                <div className="forecast-temperature">
                  <span className="temperature-min">{day.temperature.min}°</span>
                  <span className="temperature-max">{day.temperature.max}°</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
};

export default ForecastPanel;
