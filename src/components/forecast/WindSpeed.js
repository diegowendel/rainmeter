import React, { Fragment, PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import ConversionUtils from '../../utils/ConversionUtils';

class WindSpeed extends PureComponent {
  render() {
    const { isCelsiusScale, velocity } = this.props;
    return (
      <Fragment>
        <span className={isCelsiusScale ? "" : "d-none"}>
          <FormattedMessage id="WindSpeed.velocity" values={{velocity: velocity}}  /> km/h
        </span>
        <span className={isCelsiusScale ? "d-none" : ""}>
          <FormattedMessage id="WindSpeed.velocity" values={{velocity: ConversionUtils.toMPH(velocity)}} /> mph
        </span>
      </Fragment>
    );
  }
}

export default WindSpeed;
