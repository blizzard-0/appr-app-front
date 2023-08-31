import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ErrorToast,
  InfoToast,
  SuccessToast,
  WarningToast,
} from './Toast.stories';
import ToastMessage from './Message';

test('ErrorToast should render', () => {
  const { container } = render(<ErrorToast {...(ErrorToast.args as any)} />);
  expect(container.firstChild).toHaveClass(
    'flex w-full visible flex-row shadow-lg rounded-sm duration-100 cursor-pointer bg-error',
  );
});

test('InfoToast should render', () => {
  const { container } = render(<InfoToast {...(InfoToast.args as any)} />);
  expect(container.firstChild).toHaveClass(
    'flex w-full visible flex-row shadow-lg rounded-sm duration-100 cursor-pointer bg-info',
  );
});

test('SuccessToast should render', () => {
  const { container } = render(
    <SuccessToast {...(SuccessToast.args as any)} />,
  );
  expect(container.firstChild).toHaveClass(
    'flex w-full visible flex-row shadow-lg rounded-sm duration-100 cursor-pointer bg-success',
  );
});

test('WarningToast should render', () => {
  const { container } = render(
    <WarningToast {...(WarningToast.args as any)} />,
  );
  expect(container.firstChild).toHaveClass(
    'flex w-full visible flex-row shadow-lg rounded-sm duration-100 cursor-pointer bg-warning',
  );
});

test('Toast should be auto closeable', async () => {
  const onClose = jest.fn();
  render(
    <ToastMessage
      id="1"
      message="message"
      options={{ autoClose: true, duration: 1000, hideIcon: true }}
      onRemove={onClose}
    />,
  );
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
  expect(onClose).toBeCalledTimes(1);
});

test('Toast should be closeable manually', async () => {
  const onClose = jest.fn();
  const { getByTestId } = render(
    <ToastMessage
      id="1"
      message="message"
      options={{ autoClose: false }}
      onRemove={onClose}
    />,
  );
  const closeEl = getByTestId('toast-close');
  userEvent.click(closeEl);
  expect(onClose).toBeCalledTimes(1);
});
