import React from 'react';
import { intl } from '../utils/IntlProviderUtils';
import { mount } from 'enzyme';

import App from '../App';
import Spinner from '../components/spinner/Spinner';
import { StateSelect } from '../components/select';

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
  });
});
