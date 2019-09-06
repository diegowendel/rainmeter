import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { intl } from '../utils/IntlProviderUtils';

import ForecastCards from '../components/forecast/ForecastCards';

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

describe("<ForecastCards />", () => {
  const props = {
    data: [
      {
        date: "2019-08-25",
        temperature: {
          max: 20,
          maxf: 68,
          min: 12,
          minf: 54
        },
        text_icon: {
          icon: {
            day: 1
          }
        }
      },
      {
        date: "2019-08-26",
        temperature: {
          max: 25,
          maxf: 77,
          min: 15,
          minf: 59
        },
        text_icon: {
          icon: {
            day: 1
          }
        }
      }
    ],
    isCelsiusScale: true,
    selected: 0
  };

  it("Renders with correct card selected", () => {
    act(() => {
      render(intl(<ForecastCards {...props} />), container);
    });

    expect(container.querySelector(".forecast-selected-day").textContent).toBe("sun12°20°54°68°");

    act(() => {
      render(intl(<ForecastCards {...props} selected={1} />), container);
    });

    expect(container.querySelector(".forecast-selected-day").textContent).toBe("mon15°25°59°77°");
  });

  it("Fire event when clicks on card", () => {
    const handleOnClick = jest.fn();
    act(() => {
      render(intl(<ForecastCards {...props} handleOnClick={handleOnClick} />), container);
    });

    expect(container.querySelector(".forecast-selected-day").textContent).toBe("sun12°20°54°68°");

    const card = container.querySelectorAll(".forecast-card")[1];
    act(() => {
      card.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
