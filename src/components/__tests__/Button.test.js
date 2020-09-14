import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../UI/Button/Button';

describe('Button', () => {
  test('renders properly Button component', () => {
    const { getByRole } = render(
      <Button ariaLabel="search" icon="fa fa-search" />
    );
    expect(getByRole('button')).toBeInTheDocument();
  });

  test('calls the onClick callback handler', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button clicked={onClick} ariaLabel="search" icon="fa fa-search" />
    );
    userEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
