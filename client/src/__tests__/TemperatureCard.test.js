import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TemperatureCard from '../components/forecast/TemperatureCard';

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

describe("<TemperatureCard />", () => {
  it("Renders with Celsius scale", () => {
    act(() => {
      render(<TemperatureCard isCelsiusScale={true}
        max={20} maxf={68} min={12} minf={54} />, container);
    });

    expect(container.querySelector(".forecast-temperature > .temperature-min").textContent).toBe("12°");
    expect(container.querySelector(".forecast-temperature > .temperature-max").textContent).toBe("20°");
  });

  it("Renders with Fahrenheit scale", () => {
    act(() => {
      render(<TemperatureCard isCelsiusScale={false}
        max={20} maxf={68} min={12} minf={54} />, container);
    });

    expect(container.querySelector(".forecast-temperature > .temperature-min").textContent).toBe("54°");
    expect(container.querySelector(".forecast-temperature > .temperature-max").textContent).toBe("68°");
  });
});
