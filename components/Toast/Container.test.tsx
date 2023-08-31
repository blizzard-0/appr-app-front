import { render } from '@testing-library/react';
import { ToastContainer } from './Container';

test('Container should render', () => {
  const { container } = render(<ToastContainer />);
  expect(container.firstChild).toHaveClass(
    'bottom-[63px] md:bottom-0 left-1/2 -translate-x-1/2 transform fixed z-40 w-full md:w-toast p-0 md:px-4 md:py-20 max-h-screen overflow-hidden pointer-events-none',
  );
  expect(container.firstChild?.firstChild).toHaveClass(
    'flex-1 flex flex-col-reverse fade mr-8 justify-end pointer-events-none w-full',
  );
});
