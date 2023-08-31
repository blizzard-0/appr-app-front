import { render } from '@testing-library/react';
import { Footer } from '.';

test('Footer should render', () => {
  const { container } = render(<Footer />);
  expect(container).toBeTruthy();
  expect(container.getElementsByTagName('a').length).toBe(15);
});
