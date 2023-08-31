import { render } from '@testing-library/react';
import { SmallText } from '.';

test('SmallText should render', () => {
  const { container } = render(<SmallText />);
  expect(container.querySelector('.font-normal.text-sm')).not.toBeNull();
});
