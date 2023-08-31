import 'jest-styled-components';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilledButton } from '.';

// it should render a default button, if there were no arguments or properties passed
test('a default button should render', async () => {
  const tree = render(<FilledButton />);
  expect(tree).toMatchSnapshot();
});

// when a button is clicked, it should toggle the loading state, and button should be disabled.
test('a button when clicked it should show a spinner', () => {
  const tree = render(<FilledButton $loading={true} />);
  expect(tree).toMatchSnapshot();
});
// whenever the pagination variant is passed, the button's children should only render when the data fetch donitions are met.
