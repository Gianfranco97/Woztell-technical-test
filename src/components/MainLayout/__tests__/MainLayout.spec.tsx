import { expect } from '@jest/globals';
import { render } from '@testing-library/react'
import MainLayout from '../index';

it('The snapshot matches', () => {
  const { container } = render(
    <MainLayout><h1>Hollo world</h1></MainLayout>
  )
  expect(container).toMatchSnapshot()
});
