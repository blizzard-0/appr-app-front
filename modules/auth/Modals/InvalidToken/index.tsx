import { TakeMeBackModal } from '..';

export const InvalidTokenModal: React.FC<{
  redirectPath: string;
  active: boolean;
}> = ({ active, redirectPath }) => (
  <TakeMeBackModal active={active} redirectPath={redirectPath}>
    We have detected an invalid or expired token. Try again, or send us an email
    at <a href="mailto:support@appreciate.it">support@appreciate.it</a>.
  </TakeMeBackModal>
);
