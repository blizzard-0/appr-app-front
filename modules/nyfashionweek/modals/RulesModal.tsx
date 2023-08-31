import { Modal, DockedButton, AppButton } from '@/components/v2';
import { useCallback } from 'react';
import { useNyfashionweekContext } from '../context';

export const RulesModal: React.FC = () => {
  const { showRules: active, setShowRules } = useNyfashionweekContext();

  const onClose = useCallback(() => {
    setShowRules(false);
  }, [setShowRules]);

  return (
    <Modal.Base $show={active} $fullscreen onClose={onClose}>
      <Modal.Header>Appreciate Stuff, Inc.</Modal.Header>
      <Modal.Content className="py-8 px-6 text-center grid grid-cols-1 gap-3 tracking-0.02em">
        <h1 className="font-maison-neue-extended text-2xl mb-2 text-gray-950">
          Official Rules
        </h1>
        <p className="text-dark-gray-2 leading-5">
          This promotion is in no way sponsored, administered, or associated
          with New York Fashion Week or by any of the brands being awarded. By
          entering, entrants confirm that they are 13+ years of age, release
          Appreciate Stuff, Inc. of responsibility, and agree to Appreciate
          Stuff, Inc.{`'`}s terms of use.⁠ Available in the US only.⁠ Prizes not
          redeemable for cash⁠.
        </p>
      </Modal.Content>
      <Modal.Footer>
        <DockedButton>
          <AppButton $block onClick={onClose}>
            Close
          </AppButton>
        </DockedButton>
      </Modal.Footer>
    </Modal.Base>
  );
};
