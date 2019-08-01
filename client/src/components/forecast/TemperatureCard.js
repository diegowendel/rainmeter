import React, { Fragment, PureComponent } from 'react';
import ConversionUtils from '../../utils/ConversionUtils';

class TemperatureCard extends PureComponent {
  render() {
    const { isCelsiusScale, max, min } = this.props;
    return (
      <Fragment>
        <div className={isCelsiusScale ? "forecast-temperature" : "d-none"}>
          <span className="temperature-min">{min}°</span>
          <span className="temperature-max">{max}°</span>
        </div>
        <div className={isCelsiusScale ? "d-none" : "forecast-temperature"}>
          <span className="temperature-min">{ConversionUtils.toFahrenheit(min)}°</span>
          <span className="temperature-max">{ConversionUtils.toFahrenheit(max)}°</span>
        </div>
      </Fragment>
    );
  }
}

export default TemperatureCard;
