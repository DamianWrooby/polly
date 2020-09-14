import React from 'react';
import { render } from '@testing-library/react';

import About from '../About/About';

describe('About', () => {
  test('renders About component', () => {
    const { getByText } = render(<About />);
    expect(getByText('Polly')).toBeInTheDocument();
    expect(getByText(/Check air pollution in your area/)).toBeInTheDocument();
    expect(getByText('Wrooby')).toBeInTheDocument();
  });
});
