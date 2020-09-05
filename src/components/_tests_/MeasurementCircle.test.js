import React from 'react';
import { render, screen } from '@testing-library/react';

import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';

describe('MeasurementCircle', () => {
  test('renders proper info when type is set wrong', () => {
    const { getByText, getAllByText } = render(
      <MeasurementCircle label="Label" value={30} maxValue={40} />
    );
    screen.debug();
    expect(getAllByText(/Label/)).toHaveLength(2);
    expect(getByText(/30/)).toBeInTheDocument();
    expect(getByText(/40/)).toBeInTheDocument();
  });
});
