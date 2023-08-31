import { ProfileContextProvider } from '../../context';
import { Meta, Navbar, ProgressIndicator } from '../../../../components/v2';
import { useCurrentUser } from '../../../auth/hooks';
import { AuthRequiredModal } from '@/modules/auth/Modals';
import { ToastContextProvider } from '@/modules/toast';

interface SettingsPageLayoutProps {
  children?: React.ReactNode;
}

export const SettingsPageLayout: React.FC<SettingsPageLayoutProps> = ({
  children,
}) => {
  const { currentUser, loading } = useCurrentUser();

  if (loading) {
    return <ProgressIndicator active />;
  }

  if (!currentUser) {
    return <AuthRequiredModal />;
  }

  const { fullName, primaryEmailAddress, avatarImage } = currentUser;

  return (
    <ProfileContextProvider>
      <ToastContextProvider>
        <Meta />
        <Navbar
          currentUser={{
            primaryEmail: primaryEmailAddress,
            userName: fullName,
            avatarUrl: avatarImage?.url,
          }}
        />
        <div className="mt-16 pt-px">{children}</div>
      </ToastContextProvider>
    </ProfileContextProvider>
  );
};
