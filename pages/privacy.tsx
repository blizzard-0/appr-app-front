import { Meta } from '../components/Meta';

import { PrivacyPage } from '../modules/landing/privacy/PrivacyPage';

export default function Privacy() {
  return (
    <>
      <Meta
        title="appreciate Privacy Policy"
        ogTitle="appreciate Privacy Policy"
        description="We understand that when you use appreciate’s platform, you are placing your trust in us to handle your data appropriately. Review our full privacy policy."
        url="https://appreciate.it/privacy"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />

      <PrivacyPage />
    </>
  );
}
