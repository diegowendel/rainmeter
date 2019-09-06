import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { intl } from '../utils/IntlProviderUtils';
import { mount } from 'enzyme';

import Select from 'react-select';
import { CitySelect } from '../components/select';

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

describe("<CitySelect />", () => {
  const onChange = jest.fn();
  const props = {
    isDisabled: false,
    isLoading: true,
    onChange: onChange,
    options: [
      { name: 'São Paulo', id: 1 },
      { name: 'São José dos Campos', id: 2 }
    ],
    value: { id: 1, name: 'São Paulo' }
  };

  it("Renders correctly in en-US", () => {
    act(() => {
      render(intl(<CitySelect {...props} />), container);
    });

    expect(container.querySelector(".select_city__placeholder")).toBe(null);
    expect(container.querySelector(".select_city__single-value")).not.toBe(null);
    expect(container.querySelector(".select_city__single-value").textContent).toBe("São Paulo");

    act(() => {
      render(intl(<CitySelect {...props} value={null} />), container);
    });

    expect(container.querySelector(".select_city__placeholder")).not.toBe(null);
    expect(container.querySelector(".select_city__single-value")).toBe(null);
    expect(container.querySelector(".select_city__placeholder").textContent).toBe("Input a city...");
  });

  it("Renders correctly in pt-BR", () => {
    act(() => {
      render(intl(<CitySelect {...props} />, "pt-BR"), container);
    });

    expect(container.querySelector(".select_city__placeholder")).toBe(null);
    expect(container.querySelector(".select_city__single-value")).not.toBe(null);
    expect(container.querySelector(".select_city__single-value").textContent).toBe("São Paulo");

    act(() => {
      render(intl(<CitySelect {...props} value={null} />, "pt-BR"), container);
    });

    expect(container.querySelector(".select_city__placeholder")).not.toBe(null);
    expect(container.querySelector(".select_city__single-value")).toBe(null);
    expect(container.querySelector(".select_city__placeholder").textContent).toBe("Selecione sua cidade...");
  });

  // based on https://github.com/airbnb/enzyme/issues/400
  it("Callback is called correctly", () => {
    const wrapper = mount(<CitySelect {...props} />);

    // Find input field on Select component (from the react-select module)
    const input = wrapper.find(Select).find("input");

    // Simulate the arrow down event to open the dropdown menu.
    input.simulate("keyDown", { key: "ArrowDown", keyCode: 40 });

    // Simulate the enter key to select the first option.
    input.simulate("keyDown", { key: "Enter", keyCode: 13 });

    // Assert that the onChange function has been called.
    expect(onChange).toHaveBeenCalled();
  });
});
