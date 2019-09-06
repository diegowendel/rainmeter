import React from 'react';
import { render, unmountComponentAtNode,  } from 'react-dom';
import { act } from 'react-dom/test-utils';

import LanguageToggle from '../components/language/LanguageToggle';

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

describe("<LanguageToggle />", () => {
  it("Renders toggle with english selected", () => {
    jest.spyOn(LanguageToggle.prototype, 'onChange');
    const onChangeLocale = jest.fn();
    let locale = "en-US";

    // Starts with no locale
    act(() => {
      render(<LanguageToggle onChangeLocale={onChangeLocale} /> , container);
    });

    expect(container.querySelector(".portuguese-selected")).toBeNull();

    // Change locale (change props)
    act(() => {
      render(<LanguageToggle locale={locale} onChangeLocale={onChangeLocale} /> , container);
    });

    expect(container.querySelector(".portuguese-selected")).toBeNull();

    let toggle = container.querySelector(".grid");
    act(() => {
      toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(LanguageToggle.prototype.onChange).toHaveBeenCalled();
    expect(onChangeLocale).toHaveBeenCalled();
    expect(container.querySelector(".portuguese-selected")).not.toBeNull();
  });

  it("Renders toggle with portuguese selected", () => {
    jest.spyOn(LanguageToggle.prototype, 'onChange');
    const onChangeLocale = jest.fn();
    let locale = "pt-BR";

    // Starts with no locale
    act(() => {
      render(<LanguageToggle onChangeLocale={onChangeLocale} /> , container);
    });

    expect(container.querySelector(".portuguese-selected")).toBeNull();

    // Change locale (change props)
    act(() => {
      render(<LanguageToggle locale={locale} onChangeLocale={onChangeLocale} /> , container);
    });

    expect(container.querySelector(".portuguese-selected")).not.toBeNull();

    let toggle = container.querySelector(".grid");
    act(() => {
      toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(LanguageToggle.prototype.onChange).toHaveBeenCalled();
    expect(onChangeLocale).toHaveBeenCalled();
    expect(container.querySelector(".portuguese-selected")).toBeNull();
  });
});
