import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { forecastDummy } from '../data/Data';
import { intl } from '../utils/IntlProviderUtils';

import ForecastPanel from '../components/forecast/ForecastPanel';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<ForecastPanel />", () => {
  const props = {
    forecast: forecastDummy,
    locale: "en-US"
  };

  it("Renders in English and Portuguese", () => {
    act(() => {
      render(intl(<ForecastPanel {...props} />), container);
    });

    const card = container.querySelector(".forecast-selected-day");

    expect(card.textContent).toBe("sun12°20°54°68°");

    act(() => {
      render(intl(<ForecastPanel {...props} locale="pt-BR" />, "pt-BR"), container);
    });

    expect(card.textContent).toBe("dom12°20°54°68°");
  });

  it("Click on card fires handleOnClick method", () => {
    jest.spyOn(ForecastPanel.prototype, 'handleOnClick');

    act(() => {
      render(intl(<ForecastPanel {...props} />), container);
    });

    const card = container.querySelectorAll(".forecast-card")[3];
    act(() => {
      card.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.handleOnClick).toHaveBeenCalled();
  });

  it("Click on button fires onChangeChart method", () => {
    jest.spyOn(ForecastPanel.prototype, 'onChangeChart');
    act(() => {
      render(intl(<ForecastPanel {...props} />), container);
    });

    let button = container.querySelectorAll(".btn-chart")[0];
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.onChangeChart).toHaveBeenCalled();

    button = container.querySelectorAll(".btn-chart")[0];
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.onChangeChart).toHaveBeenCalled();

    button = container.querySelectorAll(".btn-chart")[1];
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.onChangeChart).toHaveBeenCalled();
  });

  it("Click on span of inactive temperature fires onChangeScale method", () => {
    jest.spyOn(ForecastPanel.prototype, 'onChangeScale');

    act(() => {
      render(intl(<ForecastPanel {...props} />), container);
    });

    let temperatureCelsius = container.querySelector(".temperature-active");
    let temperatureFahrenheit = container.querySelector(".temperature-inactive");
    act(() => {
      temperatureFahrenheit.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.onChangeScale).toHaveBeenCalled();
    expect(temperatureCelsius.className).toBe('temperature-inactive');
    expect(temperatureFahrenheit.className).toBe('temperature-active');

    act(() => {
      temperatureCelsius.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(ForecastPanel.prototype.onChangeScale).toHaveBeenCalled();
    expect(temperatureCelsius.className).toBe('temperature-active');
    expect(temperatureFahrenheit.className).toBe('temperature-inactive');
  });
});
