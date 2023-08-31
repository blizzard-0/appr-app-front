import { Meta } from '../components/Meta';

import { CareersPage } from '../modules/landing/careers/CareerPage';

export default function Careers() {
  return (
    <>
      <Meta
        title="Careers at appreciate - Apply to join our team"
        ogTitle="Apply for a role at appreciate, a Web3 company"
        description="appreciate is a Web3 startup that is actively hiring for software engineering roles. Apply today! Open roles for fullstack, backend, and staff engineering."
        url="https://appreciate.it/careers"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />

      <CareersPage />
    </>
  );
}
