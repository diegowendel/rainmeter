import React, { Component } from 'react';
import DateUtils from '../../utils/DateUtils';

class ForecastPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: undefined
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(selected) {
    console.log('teste', selected);
    this.setState({ selected });
  }

  render() {
    return (
      <div className="forecast-panel">
        {this.props.forecast.data.map((day, index) => {
          const classForecastDay = this.state.selected === index ? "forecast-item clicable forecast-selected-day" : "forecast-item clicable";
          console.log(classForecastDay);
          return (
            <div key={index} className={classForecastDay} onClick={() => this.handleOnClick(index)}>
              <p className="forecast-weekday">{DateUtils.getDayOfWeekPTBR(day.date)}</p>
              <img src={`${process.env.PUBLIC_URL}/img/${day.text_icon.icon.day}.svg`} alt="Logo" style={{width: '100px', height: '100px'}} />
              <div className="forecast-temperature">
                <p>{day.temperature.min}°</p>
                <p>{day.temperature.max}°</p>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
};

export default ForecastPanel;
