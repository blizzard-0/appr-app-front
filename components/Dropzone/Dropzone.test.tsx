import { render } from '@testing-library/react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';
import { Dropzone } from '.';

const getInputProps = (): DropzoneInputProps => {
  return {};
};

const getRootProps = (): DropzoneRootProps => {
  return {};
};

test('Dropzone should render child', () => {
  const { getByTestId } = render(
    <Dropzone
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      isDragActive={false}
    >
      <p data-testid="test-dropzone-child">Hello</p>
    </Dropzone>,
  );
  expect(getByTestId('test-dropzone-child')).toBeTruthy();
});

test('Dropzone should render default content when drag active', () => {
  const { getByText } = render(
    <Dropzone
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      isDragActive={true}
    />,
  );
  expect(getByText('Drop the files from your computer')).toBeTruthy();
});

test('Dropzone should render default content when drag inactive', () => {
  const { getByText } = render(
    <Dropzone
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      isDragActive={false}
    />,
  );
  expect(getByText('Drag or upload a file from your computer')).toBeTruthy();
});
