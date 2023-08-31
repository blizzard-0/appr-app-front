import React from 'react';
import { Meta } from '../components/Meta';
import { Custom404Page } from '../modules/landing/404/404Page';

export default function NotFoundPage() {
  return (
    <>
      <Meta
        title="appreciate.it 404 Error"
        ogTitle="appreciate.it 404 Error"
        description="404 Error: We cannot find the page you were looking for. Please check the URL or navigate to another page. We apologize for the inconvenience."
        url="https://appreciate.it/"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />
      <Custom404Page />
    </>
  );
}
