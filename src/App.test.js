import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import App from './App';
import { fireEvent } from '@testing-library/react/dist';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    render(<App />);
    // queries.getByText(/hello world/i);
    // if there are errors rendering the component, the test will fail
  });

  it('renders hello world', () => {
    const { getByText } = render(<App />);
    getByText(/hello world/i);
  });
});

describe('Greet Button', () => {
  it('says hello developers', () => {
    const { getByText, queryByText } = render(<App />);
    // find the button
    const button = getByText(/greet/i);

    // click
    fireEvent.click(button);

    // confirm that 'hello developers' is there
    expect(queryByText(/hello developers/i)).toBeTruthy();
  });
});
