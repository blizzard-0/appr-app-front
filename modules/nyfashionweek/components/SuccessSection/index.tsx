import { AppButton, DockedButton, Logo, Modal } from '@/components/v2';
import { useNyfashionweekContext } from '../../context';
import Image from 'next/image';
import { NYFWCheckIcon } from './components/NYFWCheckIcon';
import { routes } from '@/modules/routes';
import { useCallback, useState } from 'react';
import router from 'next/router';
import { ThumbsUp } from './components/ThumbsUp';
import { ThumbsDown } from './components/ThumsDown';

export const SuccessSection: React.FC = () => {
  const { successResult, setShowRules, setStep } = useNyfashionweekContext();
  const [showAccuracy, setShowAccuracy] = useState(false);

  const rateVerificationResult = async (id: string, correct: boolean) => {
    await fetch(
      'https://appreciate-fingerprinting-dyjcvwqkja-uc.a.run.app/rate',
      {
        method: 'POST',
        body: JSON.stringify({
          identification_id: id,
          rating: correct ? 1 : 0,
        }),
      },
    );
    setShowAccuracy(true);
  };

  return (
    <>
      <div className="pt-12">
        <Logo $variant="small" />
      </div>
      <div className="h-px bg-black mt-4 mb-3 w-32"></div>
      <h1 className="font-maison-neue-extended text-xl">NYFW22</h1>
      <div className="mt-11 relative">
        <Image
          src={successResult.image}
          alt={successResult.celebrityName}
          width={160}
          height={160}
          className="rounded-full border-gray-200 border-1 relative overflow-hidden"
        />
        <div className="absolute bottom-2 right-2">
          <NYFWCheckIcon />
        </div>
      </div>
      <div className="text-center mt-3">
        <h1 className="font-maison-neue-extended text-2xl mb-2">
          This is {successResult.celebrityName}
          {`'`}s Balenciaga
        </h1>
        <p className="font-maison-neue-medium text-base text-dark-gray-2 leading-6">
          We recognize that this is {successResult.celebrityName}
          {`'`}s bag!
        </p>
        <p className="font-maison-neue-medium text-base text-dark-gray-2 leading-6 mt-4">
          You’ve been entered into our giveaway. We will notify all participants
          regarding the prize via email by Thursday, September 15th. Check out
          the{' '}
          <span
            className="text-indigo cursor-pointer"
            onClick={() => setShowRules(true)}
          >
            Official Rules
          </span>{' '}
          for more details.
        </p>
        <p className="text-gray-950 text-xl mt-14 font-semibold tracking-wide">
          How was our accuracy?
        </p>
        <div className="flex justify-center gap-12 mt-3 items-center">
          <button
            onClick={() => {
              rateVerificationResult(successResult.id, true);
            }}
          >
            <ThumbsUp />
          </button>
          <button
            onClick={() => {
              rateVerificationResult(successResult.id, false);
            }}
          >
            <ThumbsDown />
          </button>
        </div>
      </div>
      {showAccuracy && (
        <Modal.Base $show={showAccuracy} onClose={() => setShowAccuracy(false)}>
          <Modal.Header className="text-center">
            Thanks for letting us know
          </Modal.Header>
          <Modal.Content className="py-8 px-6 text-center grid grid-cols-1 gap-3 tracking-0.02em">
            <p>Your response has been recorded.</p>
          </Modal.Content>
          <Modal.Footer>
            <div className="flex flex-col gap-4 mx-4 mb-4">
              <AppButton
                $block
                onClick={() => {
                  setStep('Camera');
                }}
              >
                Try another bag
              </AppButton>
              <AppButton
                $variant="secondary"
                $block
                onClick={() => {
                  router.push(routes.appFrontend.myWallet.fillPath(null));
                }}
              >
                Done
              </AppButton>
            </div>
          </Modal.Footer>
        </Modal.Base>
      )}
    </>
  );
};
