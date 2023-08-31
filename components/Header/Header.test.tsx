import { render } from '@testing-library/react';
import { Header } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/',
}));

test('Header should render', () => {
  const { container } = render(<Header />);
  expect(container).toBeTruthy();
});
