import { useRouter } from 'next/router';

import { Modal, AppButton, DockedButton } from '@/components/v2';
import { routes } from '@/modules/routes';
import { useAuthContextProvider } from '../../context';
import { useSignOut } from '../../hooks/useSignOut';

export const AlreadyLoggedInModal: React.FC = () => {
  const { currentUser, loading } = useAuthContextProvider();
  const router = useRouter();
  const { signOut, signOutState } = useSignOut();

  const showModal = !loading && Boolean(currentUser);

  const handleGoWalletPage = () => {
    router.push(routes.appFrontend.myWallet.fillPath(null));
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      router.reload();
    } catch {
      // Consumes Error
    }
  };

  return (
    <Modal.Base $show={showModal}>
      <Modal.Header>Hmm...</Modal.Header>
      <Modal.Content className="p-5 text-center">
        Looks like you{`'`}re already logged in. Log out first, or continue as{' '}
        <span className="font-bold">{currentUser?.primaryEmailAddress}</span>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton onClick={handleGoWalletPage} $block>
            Continue
          </AppButton>
          <AppButton
            $variant="secondary"
            $loading={signOutState.loading}
            onClick={handleSignOut}
            $block
          >
            Log out
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
