import { render } from '@testing-library/react';
import { Spinner } from '.';

test('Spinner should render', () => {
  const { container } = render(<Spinner />);
  expect(container.querySelector('.spinner')).not.toBeNull();
});
