import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Spinner from '../components/spinner/Spinner';

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

describe("<Spinner />", () => {
  it("Renders without crashing", () => {
    act(() => {
      render(<Spinner />, container);
    });

    expect(container).toMatchSnapshot();
  });
});
