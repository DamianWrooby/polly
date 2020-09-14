import React from 'react';
import { render } from '@testing-library/react';

import AirQualityBox from '../AirQualityBox/AirQualityBox';

describe('AirQualityBox', () => {
  test('renders properly AirQualityBox component', () => {
    const { getByText } = render(
      <AirQualityBox index={{ level: 'VERY_LOW' }} />
    );
    expect(getByText(/Pollution level/)).toBeInTheDocument();
    expect(getByText(/Take a deep breath!/)).toBeInTheDocument();
  });
});
