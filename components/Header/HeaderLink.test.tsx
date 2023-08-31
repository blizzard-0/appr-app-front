import { render } from '@testing-library/react';
import { HeaderLinks } from './HeaderLinks';

const navigation = [
  {
    name: 'Path1',
    href: '/path1',
    tagline: 'Tag1',
    color: 'blue',
  },
  {
    name: 'For Owners',
    href: '/path2',
    tagline: 'Tag2',
    color: 'red',
  },
];
// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');
useRouter.mockImplementation(() => ({
  pathname: '/',
}));
test('HeaderLinks should render', () => {
  const { getByRole, getByText, getAllByRole } = render(
    <HeaderLinks navLinks={navigation} />,
  );
  expect(getByRole('navigation')).toHaveClass(
    'inline-block items-center space-x-6',
  );
  expect(getAllByRole('link').length).toBe(2);
  expect(getByText('Path1')).toHaveClass(
    'pb-2 tracking-wider text-panda-dark text-navlink uppercase group',
  );
  expect(getByText('Tag1')).toHaveClass(
    'blue hidden leading-5 normal-case rounded-sm py-2 px-3 mt-3 group-hover:block absolute',
  );
});
