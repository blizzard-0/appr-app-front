import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEffect } from 'react';
import { useToast } from '.';

const TestElem = () => {
  const { pushError, pushInfo, pushSuccess, pushWarning, toastElement } =
    useToast();

  useEffect(() => {
    pushError('Error');
    pushInfo('Info');
    pushSuccess('Success');
    pushWarning('Warning');
    pushWarning('Warning', { hideIcon: true, autoClose: false });
  }, [pushError, pushInfo, pushSuccess, pushWarning]);

  return (
    <div>
      <div id="toast-container" data-testid="toast-container"></div>
      <div>{toastElement}</div>
    </div>
  );
};

const TestEmptyElem = () => {
  const { pushError, toastElement } = useToast();

  useEffect(() => {
    pushError('Error');
  }, [pushError]);

  return (
    <div>
      <div data-testid="toasts-container">{toastElement}</div>
    </div>
  );
};

test('Provider should work', () => {
  const { getByTestId, getAllByTestId } = render(<TestElem />);
  const toastContainerEl = getByTestId('toast-container');
  expect(toastContainerEl).toBeTruthy();
  expect(toastContainerEl.childElementCount).toBe(5);
  expect(toastContainerEl.children[0].children[0]).toHaveClass('bg-error');
  expect(toastContainerEl.children[1].children[0]).toHaveClass('bg-info');
  expect(toastContainerEl.children[2].children[0]).toHaveClass('bg-success');
  expect(toastContainerEl.children[3].children[0]).toHaveClass('bg-warning');
  const closeEls = getAllByTestId('toast-close');
  userEvent.click(closeEls[0]);
  expect(toastContainerEl.childElementCount).toBe(4);
});

test('Provider should not work', () => {
  const { getByTestId } = render(<TestEmptyElem />);
  const toastContainerEl = getByTestId('toasts-container');
  expect(toastContainerEl.childElementCount).toBe(0);
});
