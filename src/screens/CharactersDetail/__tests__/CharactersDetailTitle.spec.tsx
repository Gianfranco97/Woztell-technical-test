import { expect } from '@jest/globals';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import CharactersDetailTitle from '../CharactersDetailTitle';

const EXAMPLE_TITLE = "Luke Skywalker"

it('The snapshot matches', () => {
  const { container } = render(
    <MemoryRouter>
      <CharactersDetailTitle title={EXAMPLE_TITLE} />
    </MemoryRouter>
  )

  expect(container).toMatchSnapshot()
});
