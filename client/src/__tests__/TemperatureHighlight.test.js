import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TemperatureHighlight from '../components/forecast/TemperatureHighlight';

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

it("Renders with Celsius scale", () => {
  act(() => {
    render(<TemperatureHighlight isCelsiusScale={true}
      temperature={20} temperaturef={68} />, container);
  });

  expect(container.querySelector(".forecast-temperature-highlight").textContent).toBe("20");
});

it("Renders with Fahrenheit scale", () => {
  act(() => {
    render(<TemperatureHighlight isCelsiusScale={false}
      temperature={20} temperaturef={68} />, container);
  });

  expect(container.querySelector(".forecast-temperature-highlight").textContent).toBe("68");
});
