import React, { Fragment, PureComponent } from 'react';
import ConversionUtils from '../../utils/ConversionUtils';

class WindSpeed extends PureComponent {
  render() {
    const { isCelsiusScale, speed } = this.props;
    return (
      <Fragment>
        <span className={isCelsiusScale ? "" : "d-none"}>Vento: {speed} km/h</span>
        <span className={isCelsiusScale ? "d-none" : ""}>Vento: {ConversionUtils.toMPH(speed)} mph</span>
      </Fragment>
    );
  }
}

export default WindSpeed;
