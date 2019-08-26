import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import WindSpeed from '../components/forecast/WindSpeed';

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

it("Renders with km/h scale", () => {
  act(() => {
    render(<WindSpeed isCelsiusScale={true} speed={10} />, container);
  });

  expect(container.querySelector("span:not(.d-none)").textContent).toBe("Vento: 10 km/h");
});

it("Renders with mph scale", () => {
  act(() => {
    render(<WindSpeed isCelsiusScale={false} speed={10} />, container);
  });

  expect(container.querySelector("span:not(.d-none)").textContent).toBe("Vento: 6 mph");
});
