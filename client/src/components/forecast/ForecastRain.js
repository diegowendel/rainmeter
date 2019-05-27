import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons';

const ForecastRain = (props) => {
  return (
    <div className="forecast-rain">
      <FontAwesomeIcon icon={faUmbrella} title="Probabilidade de chuva" /> {props.rain.probability} %
    </div>
  )
};

export default ForecastRain;
