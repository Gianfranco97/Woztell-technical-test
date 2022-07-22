import { expect } from '@jest/globals';
import { render } from '@testing-library/react'
import LoadingFullPage from '../index';

it('The snapshot matches', () => {
  const { container } = render(
    <LoadingFullPage />
  )
  expect(container).toMatchSnapshot()
});
