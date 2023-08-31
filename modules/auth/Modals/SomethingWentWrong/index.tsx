import { TakeMeBackModal } from '..';

export const SomethingWentWrongModal: React.FC<{
  active: boolean;
  redirectPath: string;
}> = ({ active, redirectPath }) => (
  <TakeMeBackModal active={active} redirectPath={redirectPath}>
    Something went wrong. Try again, or send us an email at{' '}
    <a href="mailto:support@appreciate.it">support@appreciate.it</a>.
  </TakeMeBackModal>
);
