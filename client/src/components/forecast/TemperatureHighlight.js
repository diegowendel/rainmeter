import React, { Fragment, PureComponent } from 'react';
import ConversionUtils from '../../utils/ConversionUtils';

class TemperatureHighlight extends PureComponent {
  render () {
    const { isCelsiusScale, temperature } = this.props;
    return (
      <Fragment>
        <span className={isCelsiusScale ? "forecast-temperature-highlight" : "d-none"}>{temperature}</span>
        <span className={isCelsiusScale ? "d-none" : "forecast-temperature-highlight"}>{ConversionUtils.toFahrenheit(temperature)}</span>
      </Fragment>
    );
  }
}

export default TemperatureHighlight;
