import React from 'react';
import './LandingPanel.css';

const LandingPanel = () => {
  return (
    <div className="landing-panel">
      <span>Busque pela sua cidade e veja se vai precisar passar protetor solar.</span>
      <img src={`${process.env.PUBLIC_URL}/img/1.svg`}
            alt="sol" className="icon" />
      <span>Se vai precisar de um guarda-chuva.</span>
      <img src={`${process.env.PUBLIC_URL}/img/6.svg`}
            alt="chuva" className="icon" />
      <span>Ou se é melhor levar um casaco.</span>
      <img src={`${process.env.PUBLIC_URL}/img/7.svg`}
            alt="neve" className="icon" />
    </div>
  );
}

export default LandingPanel;
