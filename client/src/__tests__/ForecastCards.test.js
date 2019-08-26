import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

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

it("Renders with correct card selected", () => {
  const data = [
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
  ];

  act(() => {
    render(<ForecastCards isCelsiusScale={true}
      selected={0} data={data} />, container);
  });

  expect(container.querySelector(".forecast-selected-day").textContent).toBe("dom12°20°54°68°");

  act(() => {
    render(<ForecastCards isCelsiusScale={true}
      selected={1} data={data} />, container);
  });

  expect(container.querySelector(".forecast-selected-day").textContent).toBe("seg15°25°59°77°");
});

it("Fire event when clicks on card", () => {
  const data = [
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
    }
  ];
  const handleOnClick = jest.fn();

  act(() => {
    render(<ForecastCards isCelsiusScale={true}
      selected={0} data={data} handleOnClick={handleOnClick} />, container);
  });

  const card = container.querySelector(".forecast-selected-day");
  expect(card.textContent).toBe("dom12°20°54°68°");

  act(() => {
    card.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(handleOnClick).toHaveBeenCalledTimes(1);
});
