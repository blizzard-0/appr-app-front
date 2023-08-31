import { render } from '@testing-library/react';
import {
  AddIcon,
  CheckedIcon,
  CloseIcon,
  DeleteIcon,
  EditAvatar,
  EditIcon,
  HamburgerIcon,
  InstagramIcon,
  SortIcon,
  TiktokIcon,
  TwitterIcon,
  UploadIcon,
  RadioOnIcon,
  RadioOffIcon,
  SearchIcon,
  BackIcon,
  ChevronRightIcon,
} from '.';

test('AddIcon should render', () => {
  const { container } = render(<AddIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('CheckedIcon should render', () => {
  const { container } = render(<CheckedIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('CloseIcon should render', () => {
  const { container } = render(<CloseIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('DeleteIcon should render', () => {
  const { container } = render(<DeleteIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('EditIcon should render', () => {
  const { container } = render(<EditIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('EditAvatar should render', () => {
  const { container } = render(<EditAvatar />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('HamburgerIcon should render', () => {
  const { container } = render(<HamburgerIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('InstagramIcon should render', () => {
  const { container } = render(<InstagramIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('SortIcon should render', () => {
  const { container } = render(<SortIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('TiktokIcon should render', () => {
  const { container } = render(<TiktokIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('TwitterIcon should render', () => {
  const { container } = render(<TwitterIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('UploadIcon should render', () => {
  const { container } = render(<UploadIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('RadioOnIcon should render', () => {
  const { container } = render(<RadioOnIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('RadioOff should render', () => {
  const { container } = render(<RadioOffIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('SearchIcon should render', () => {
  const { container } = render(<SearchIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('BackIcon should render', () => {
  const { container } = render(<BackIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});

test('ChevronRightIcon should render', () => {
  const { container } = render(<ChevronRightIcon />);
  const suggestEl = container.querySelector('svg');
  expect(suggestEl).not.toBeNull();
});
