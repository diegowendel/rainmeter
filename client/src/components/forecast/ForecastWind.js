import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';

const ForecastWind = (props) => {
  return (
    <div className="forecast-wind">
      <FontAwesomeIcon icon={faWind} title="Intensidade média do vento" /> {props.wind.velocity_avg} km/h
    </div>
  )
};

export default ForecastWind;
