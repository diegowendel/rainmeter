import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';
import ForecastDetails from './ForecastDetails';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      day: undefined,
      selected: undefined
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index, day) {
    console.log('DAY', day);
    this.setState({ selected: index, day: day });
  }


  render() {
    return (
      <div className="forecast-panel">
        <div style={{height: '200px'}}>
          {
            this.state.day && <ForecastDetails day={this.state.day} />
          }
        </div>
        <div className="forecast-cards">
          {this.props.forecast.data.map((day, index) => {
            const classForecastDay = this.state.selected === index ? "forecast-card clicable forecast-selected-day" : "forecast-card clicable";
            return (
              <div key={index} className={classForecastDay} onClick={() => this.handleOnClick(index, day)}>
                <p className="forecast-weekday">{DateUtils.getDayOfWeekShort(day.date)}</p>
                <img src={`${process.env.PUBLIC_URL}/img/${day.text_icon.icon.day}.svg`} alt="Logo" style={{width: '100px', height: '100px'}} />
                <div className="forecast-temperature">
                  <p>{day.temperature.min}°</p>
                  <p>{day.temperature.max}°</p>
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
