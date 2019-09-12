import React from 'react';
import { FormattedMessage } from 'react-intl';
import '../../styles/LandingPanel.scss';

const LandingPanel = () => {
  return (
    <div className="landing-panel">
      <span><FormattedMessage id="LandingPanel.sunny" /></span>
      <img src={`${process.env.PUBLIC_URL}/img/1.svg`}
            alt="sol" className="icon" />
      <span><FormattedMessage id="LandingPanel.rainy" /></span>
      <img src={`${process.env.PUBLIC_URL}/img/6.svg`}
            alt="chuva" className="icon" />
      <span><FormattedMessage id="LandingPanel.snowing" /></span>
      <img src={`${process.env.PUBLIC_URL}/img/7.svg`}
            alt="neve" className="icon" />
    </div>
  );
}

export default LandingPanel;
