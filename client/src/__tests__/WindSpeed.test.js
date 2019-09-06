import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { intl } from '../utils/IntlProviderUtils';

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

describe("<WindSpeed />", () => {
  const props = {
    isCelsiusScale: true,
    velocity: 10
  };

  it("Renders with km/h scale", () => {
    act(() => {
      render(intl(<WindSpeed {...props} />), container);
    });

    expect(container.querySelector("span:not(.d-none)").textContent).toBe("Wind: 10 km/h");
  });

  it("Renders with mph scale", () => {
    act(() => {
      render(intl(<WindSpeed {...props} isCelsiusScale={false} />), container);
    });

    expect(container.querySelector("span:not(.d-none)").textContent).toBe("Wind: 6 mph");
  });
});
