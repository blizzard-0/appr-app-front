import { render, screen } from '@testing-library/react';
import { TermsConditions } from './TermsConditions';

test('Terms should render', () => {
  render(<TermsConditions />);
  const termsEl = screen.getByTestId('terms');
  expect(termsEl).toHaveClass(
    'text-gray-700 font-normal text-14-px leading-5 text-center font-maison-neue-book',
  );
  expect(termsEl.querySelector('a')).toHaveClass('underline');
});
