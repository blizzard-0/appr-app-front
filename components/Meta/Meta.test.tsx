import { render, waitFor } from '@testing-library/react';
import { GetServerSidePropsContext } from 'next';
import { Meta, getServerSideProps } from '.';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

const getMeta = (metaName: string) => {
  const metas = document.getElementsByTagName('meta');
  for (let i = 0; i < metas.length; i += 1) {
    if (metas[i].getAttribute('property') === metaName) {
      return metas[i].getAttribute('content');
    }
  }
  return '';
};

test('Default Meta should render', async () => {
  render(
    <>
      <Meta />
      <div>Body</div>
    </>,
  );
  await waitFor(() => {
    expect(getMeta('og:title')).toEqual('appreciate');
    expect(getMeta('og:description')).toEqual('elevate ownership');
    expect(getMeta('og:locale')).toEqual('en-US');
    expect(getMeta('og:site_name')).toEqual('appreciate');
  });
});

test('Custom Meta should render', async () => {
  render(
    <>
      <Meta
        title="title"
        description="description"
        locale="locale"
        siteName="siteName"
      />
      <div>Body</div>
    </>,
  );
  await waitFor(() => {
    expect(getMeta('og:title')).toEqual('title');
    expect(getMeta('og:description')).toEqual('description');
    expect(getMeta('og:locale')).toEqual('locale');
    expect(getMeta('og:site_name')).toEqual('siteName');
  });
});

test('Serverside Props check', async () => {
  const context = { query: undefined };
  const value = await getServerSideProps(context as any);
  expect(value).toEqual({
    props: {},
  });
});
