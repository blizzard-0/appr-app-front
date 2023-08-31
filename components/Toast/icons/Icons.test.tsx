import { render } from '@testing-library/react';
import CloseIcon from './CloseIcon';
import ErrorIcon from './ErrorIcon';
import InfoIcon from './InfoIcon';
import SuccessIcon from './SuccessIcon';
import WarningIcon from './WarningIcon';

test('CloseIcon should render', () => {
  const { container } = render(<CloseIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('ErrorIcon should render', () => {
  const { container } = render(<ErrorIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('InfoIcon should render', () => {
  const { container } = render(<InfoIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('SuccessIcon should render', () => {
  const { container } = render(<SuccessIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('WarningIcon should render', () => {
  const { container } = render(<WarningIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});
