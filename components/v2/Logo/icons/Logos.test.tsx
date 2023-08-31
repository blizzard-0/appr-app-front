import { render } from '@testing-library/react';
import { LogoLarge, LogoMedium, LogoSmall, LogoTiny } from '.';
import LogoOnboarding from './LogoOnboarding';

test('LogoLarge should render', () => {
  const { container } = render(<LogoLarge />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('LogoMedium should render', () => {
  const { container } = render(<LogoMedium />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('LogoSmall should render', () => {
  const { container } = render(<LogoSmall />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('LogoTiny should render', () => {
  const { container } = render(<LogoTiny />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('LogoOnboarding should render', () => {
  const { container } = render(<LogoOnboarding />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});
