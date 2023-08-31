import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Meta } from '@/components/v2';
import { UnboxingContextProvider } from '@/modules/credential/context';
import { CredentialPage } from '@/modules/credential/pages';
import { isIOS } from 'react-device-detect';
import { YouNeedToBeSignedInWrapper } from '@/modules/auth/YouNeedToBeSignedInWrapper';

const CredentialPageWrapper: React.FC = () => {
  const { query } = useRouter();
  const { credentialId } = query;

  const deepLinkingPopup = useMemo(() => {
    if (isIOS) {
      return (
        <div className="fixed top-0 left-0 right-0 bg-indigo py-2 px-4 text-xs text-white z-10">
          <div className="flex items-center justify-center">
            <span className="mr-2">Open in the appreciate app</span>
            <a
              href={`appreciate://credential/${credentialId}`}
              className="bg-white text-black px-3 py-2 rounded-sm"
            >
              Open
            </a>
          </div>
        </div>
      );
    }

    return null;
  }, [credentialId]);

  if (!credentialId) return null;

  return (
    <YouNeedToBeSignedInWrapper>
      <Meta />
      <UnboxingContextProvider receiptId={credentialId.toString()}>
        {deepLinkingPopup}
        <CredentialPage />
      </UnboxingContextProvider>
    </YouNeedToBeSignedInWrapper>
  );
};

export default CredentialPageWrapper;
