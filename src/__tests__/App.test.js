import React from 'react';
import { intl } from '../utils/IntlProviderUtils';
import { mount } from 'enzyme';
import mockAxios from 'axios';

import App from '../App';
import { forecastDummyAcrelandia } from '../data/Data';
import Spinner from '../components/spinner/Spinner';
import { StateSelect, CitySelect } from '../components/select';
import ForecastPanel from '../components/forecast/ForecastPanel';

describe("<App />", () => {
  it("Should show spinner when loading", () => {
    const onChangeLocale = jest.fn();
    const wrapper = mount(intl(<App locale="pt-BR" onChangeLocale={onChangeLocale} />, "pt-BR"));
    const appInstance = wrapper.find(App).instance();

    expect(appInstance.props.locale).toBe("pt-BR");

    expect(wrapper.find(Spinner)).toHaveLength(0);

    appInstance.setState({ loading: true }, () => {
      wrapper.update(); // update must be called
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });
  });

  it("Renders correctly change in state", () => {
    const onChangeLocale = jest.fn();
    const wrapper = mount(intl(<App locale="pt-BR" onChangeLocale={onChangeLocale} />, "pt-BR"));
    const appInstance = wrapper.find(App).instance();

    expect(appInstance.props.locale).toBe("pt-BR");

    // Find input field on Select component (from the react-select module)
    const input = wrapper.find(StateSelect).find("input");

    // Simulate the arrow down event to open the dropdown menu.
    input.simulate("keyDown", { key: "ArrowDown", keyCode: 40 });

    // Simulate the enter key to select the first option.
    input.simulate("keyDown", { key: "Enter", keyCode: 13 });

    expect(appInstance.state.selectedState.label).toBe("Acre");

    // Simulate the backspace key.
    input.simulate("keyDown", { key: "Backspace", keyCode: 8 });

    expect(appInstance.state.selectedState).toBeNull();
  });

  it("Renders correctly change in city", () => {
    const onChangeLocale = jest.fn();
    const wrapper = mount(intl(<App locale="pt-BR" onChangeLocale={onChangeLocale} />, "pt-BR"));
    const appInstance = wrapper.find(App).instance();

    expect(appInstance.props.locale).toBe("pt-BR");

    appInstance.setState({ cities: [{ id: 1, name: "Acrelândia" }] }, () => {
      wrapper.update();
    });

    // Find input field on Select component (from the react-select module)
    const inputState = wrapper.find(StateSelect).find("input");

    // Simulate the arrow down event to open the dropdown menu.
    inputState.simulate("keyDown", { key: "ArrowDown", keyCode: 40 });

    // Simulate the enter key to select the first option.
    inputState.simulate("keyDown", { key: "Enter", keyCode: 13 });

    expect(appInstance.state.selectedState.label).toBe("Acre");

    appInstance.setState({ selectedCity: { id: 1, name: "Acrelândia" } }, () => {
      wrapper.update();
    });

    // setup mock
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: forecastDummyAcrelandia
      })
    );

    // Find input field on Select component (from the react-select module)
    const inputCity = wrapper.find(CitySelect).find("input");

    // Simulate the arrow down event to open the dropdown menu.
    inputCity.simulate("keyDown", { key: "ArrowDown", keyCode: 40 });

    // Simulate the enter key to select the first option.
    inputCity.simulate("keyDown", { key: "Enter", keyCode: 13 });

    expect(wrapper.find(CitySelect).find("SingleValue")).toHaveLength(1);
    expect(wrapper.find(CitySelect).find("SingleValue").text()).toBe("Acrelândia");

    // Simulate the backspace key.
    inputCity.simulate("keyDown", { key: "Backspace", keyCode: 8 });

    expect(wrapper.find(CitySelect).find("SingleValue")).toHaveLength(0);
  });

  it("Renders panel correctly", () => {
    const onChangeLocale = jest.fn();
    const wrapper = mount(intl(<App locale="pt-BR" onChangeLocale={onChangeLocale} />, "pt-BR"));
    const appInstance = wrapper.find(App).instance();

    expect(appInstance.props.locale).toBe("pt-BR");

    expect(wrapper.find(ForecastPanel)).toHaveLength(0);

    appInstance.setState({ forecast: forecastDummyAcrelandia }, () => {
      wrapper.update(); // update must be called
      expect(wrapper.find(ForecastPanel)).toHaveLength(1);
    });
  });
});
