import { Meta } from '../components/Meta';

import { TermsPage } from '../modules/landing/terms/TermsPage';

export default function Terms() {
  return (
    <>
      <Meta
        title="appreciate Terms of Service"
        ogTitle="appreciate Terms of Service"
        description="We understand that when you use appreciate’s platform you are placing your trust in us to handle your data appropriately. Review our full privacy policy."
        url="https://appreciate.it/tos"
        images={[
          {
            url: 'https://appreciate.it/assets/og-appreciate-logo.png',
          },
        ]}
      />

      <TermsPage />
    </>
  );
}
