import React from 'react';
import { render, unmountComponentAtNode,  } from 'react-dom';
import { act } from 'react-dom/test-utils';

import IntlProviderConfigured from '../locale/IntlProviderConfigured';
import App from '../App';

let container = null;
let languageGetter = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  languageGetter = jest.spyOn(window.navigator, 'language', 'get');
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<ForecastPanel />", () => {
  it("Renders with pt-BR language", () => {
    languageGetter.mockReturnValue('pt-BR');
    act(() => {
      render(<IntlProviderConfigured /> , container);
    });
  });

  it("Renders with en-US language", () => {
    languageGetter.mockReturnValue('en-US');
    act(() => {
      render(<IntlProviderConfigured /> , container);
    });
  });

  it("Renders with language not defined", () => {
    languageGetter.mockReturnValue('en');
    act(() => {
      render(<IntlProviderConfigured /> , container);
    });
  });

  it("Renders with some child", () => {
    jest.spyOn(IntlProviderConfigured.prototype, 'onChangeLocale');
    languageGetter.mockReturnValue('en-US');
    act(() => {
      render(<IntlProviderConfigured>
        <App />
      </IntlProviderConfigured> , container);
    });

    let toggle = container.querySelector(".grid");
    act(() => {
      toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(IntlProviderConfigured.prototype.onChangeLocale).toHaveBeenCalled();
    expect(container.querySelector(".portuguese-selected")).not.toBeNull();
  });
});
