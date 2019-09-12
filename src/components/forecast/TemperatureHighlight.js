import React, { Fragment, PureComponent } from 'react';

class TemperatureHighlight extends PureComponent {
  render () {
    const { isCelsiusScale, temperature, temperaturef } = this.props;
    return (
      <Fragment>
        <span className={isCelsiusScale ? "forecast-temperature-highlight" : "d-none"}>{temperature}</span>
        <span className={isCelsiusScale ? "d-none" : "forecast-temperature-highlight"}>{temperaturef}</span>
      </Fragment>
    );
  }
}

export default TemperatureHighlight;
