import React, { Fragment, PureComponent } from 'react';

class TemperatureCard extends PureComponent {
  render() {
    const { isCelsiusScale, max, maxf, min, minf } = this.props;
    return (
      <Fragment>
        <div className={isCelsiusScale ? "forecast-temperature" : "d-none"}>
          <span className="temperature-min">{min}°</span>
          <span className="temperature-max">{max}°</span>
        </div>
        <div className={isCelsiusScale ? "d-none" : "forecast-temperature"}>
          <span className="temperature-min">{minf}°</span>
          <span className="temperature-max">{maxf}°</span>
        </div>
      </Fragment>
    );
  }
}

export default TemperatureCard;
