import { expect } from '@jest/globals';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import MissingPage from '../index';

it('The snapshot matches', () => {
  const { container } = render(
    <MemoryRouter>
      <MissingPage />
    </MemoryRouter>,
  )
  expect(container).toMatchSnapshot()
});
