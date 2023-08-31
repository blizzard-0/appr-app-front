import { TakeMeBackModal } from '..';
import { routes } from '@/modules/routes';

export const InvalidURLModal: React.FC<{ active: boolean }> = ({ active }) => (
  <TakeMeBackModal
    active={active}
    redirectPath={routes.appFrontend.signUp.fillPath(null)}
  >
    Something looks wrong here. If you{`'`}ve copied this URL from elsewhere,
    make sure you{`'`}ve selected it entirely.
  </TakeMeBackModal>
);
