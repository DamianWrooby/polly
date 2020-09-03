import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '../UI/Input/Input';

describe('Input', () => {
  test('renders properly Input component', () => {
    const { getByText } = render(<Input label="test-label" />);

    screen.debug();
    expect(getByText('test-label')).toBeInTheDocument();

    // expect(getByText(/Check air pollution in your area/)).toBeInTheDocument();
    // expect(getByText('Wrooby')).toBeInTheDocument();
  });
});
