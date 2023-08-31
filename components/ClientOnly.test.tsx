import { render, screen } from '@testing-library/react';
import { ClientOnly } from './ClientOnly';

test('Component should render after mount', () => {
  render(
    <ClientOnly>
      <div data-testid="test"></div>
    </ClientOnly>,
  );
  const tooltipEls = screen.getAllByTestId('test');
  expect(tooltipEls.length).toBe(1);
});
