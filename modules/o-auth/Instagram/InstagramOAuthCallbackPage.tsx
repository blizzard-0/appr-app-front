import { NextPage } from 'next';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import { routes } from '../../routes';
import { SomethingWentWrongModal } from '../../auth/Modals';
import { InstagramRequestState, useInstagramOAuth } from './useInstagramOAuth';
import { Modal } from '@/components/v2/Modal';
import { DockedButton, AppButton } from '@/components/v2';

export const InstagramOAuthCallbackPage: NextPage<
  | {
      code: string;
      hasError: false;
    }
  | { hasError: true }
> = (props) => {
  const [registerToken, registerState] = useInstagramOAuth();
  const [showError, setShowError] = useState(props.hasError);
  useEffect(() => {
    if (props.hasError) return;
    if (registerState.status === 'idle') {
      registerToken(props.code);
    }
    if (registerState.status === 'failure') {
      setShowError(true);
    }
  }, [props, registerState, registerToken]);

  return (
    <>
      <OAuthRegisterStatusModal active={true} registerState={registerState} />
      <SomethingWentWrongModal
        active={showError}
        redirectPath={routes.appFrontend.myWallet.fillPath(null)}
      />
    </>
  );
};

InstagramOAuthCallbackPage.getInitialProps = (context) => {
  const { code } = context.query;
  if (typeof code === 'string') {
    return {
      code,
      hasError: false,
    };
  } else {
    return {
      hasError: true,
    };
  }
};

export const OAuthRegisterStatusModal: React.FC<{
  active: boolean;
  registerState: InstagramRequestState;
}> = ({ active, registerState }) => {
  return (
    <Modal.Base $show={active} onClose={() => null}>
      <>
        {active && (
          <>
            <Modal.Content className="p-5">
              {registerState.status === 'inprogress'
                ? `Connecting...`
                : `Your appreciate wallet is successfully connected to Instagram. Click Confirm to go back to your wallet.`}
            </Modal.Content>
            <Modal.Footer>
              <DockedButton>
                <AppButton
                  onClick={() => {
                    router.push(routes.appFrontend.myWallet.fillPath(null));
                  }}
                  $loading={registerState.status === 'inprogress'}
                  $block
                >
                  Confirm
                </AppButton>
              </DockedButton>
            </Modal.Footer>
          </>
        )}
      </>
    </Modal.Base>
  );
};

export const InProgressOAuthModal: React.FC<{ active: boolean }> = ({
  active,
}) => {
  return (
    <Modal.Base $show={active} onClose={() => null}>
      {active && (
        <>
          <Modal.Content className="p-5">
            Authentication is in progress please wait...
          </Modal.Content>
        </>
      )}
    </Modal.Base>
  );
};
