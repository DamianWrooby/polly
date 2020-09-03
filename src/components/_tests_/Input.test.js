import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../UI/Input/Input';

describe('Input', () => {
  const onBlur = jest.fn();
  const onChange = jest.fn();

  test('renders properly Input component', () => {
    const { getByText } = render(
      <Input
        value=""
        label="test-label"
        blured={onBlur}
        changed={onChange}
        fieldId="search"
      />
    );
    expect(getByText('test-label')).toBeInTheDocument();
  });

  test('calls the onChange callback handler', () => {
    const { getByRole } = render(
      <Input value="" blured={onBlur} changed={onChange} fieldId="search" />
    );
    userEvent.type(getByRole('textbox'), 'test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
