import { Modal } from '@/components/v2';

export const AuthRequiredModal: React.FC = () => (
  <Modal.Base $show>
    <Modal.Header>Oops!</Modal.Header>
    <Modal.Content className="p-5 text-center">
      <p className="mb-5">You need to be logged in to view this page.</p>
    </Modal.Content>
  </Modal.Base>
);
