import React from 'react';
import Link from 'next/link';
import { routes } from '../../modules/routes';

export const TermsConditions = () => {
  return (
    <span
      className="text-gray-700 font-normal text-14-px leading-5 text-center font-maison-neue-book"
      data-testid="terms"
    >
      By clicking Sign Up you certify that you are at least 18 years of age and
      have read and agree with our{' '}
      <Link href={routes.appFrontend.tos.fillURL(null)} passHref>
        <a className="underline inline-block cursor-pointer">
          terms and conditions
        </a>
      </Link>
      .
    </span>
  );
};
