import { render } from '@testing-library/react';
import { FooterLinks } from './FooterLinks';

const navigation = [
  { name: 'Path1', href: '/path1' },
  { name: 'Path2', href: '/path2' },
];

test('HeaderLinks should render', () => {
  const { getByRole, getByText, getAllByRole } = render(
    <FooterLinks title="Menu" navLinks={navigation} />,
  );
  expect(getByText('Menu')).toHaveClass(
    'uppercase maison-neue-demi pb-4 md:pb-5 tracking-wider text-xs md:text-14-px leading-6',
  );
  expect(getByRole('navigation')).toHaveClass(
    'border-t border-dark-gray border-opacity-40 mt-8 pt-8 text-footerlink md:border-t-0 md:mt-0 md:pt-0 space-y-2',
  );
  expect(getAllByRole('link').length).toBe(2);
  expect(getByText('Path1')).toHaveClass(
    'maison-neue-book tracking-wider block hover:underline',
  );
});
