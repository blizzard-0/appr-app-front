import { CloseIcon } from '@/components/Icons';
import { routes } from '@/modules/routes';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import { CameraSection } from '../components/CameraSection';
import { ErrorSection } from '../components/ErrorSection';
import { IdleSection } from '../components/IdleSection';
import { SuccessSection } from '../components/SuccessSection';
import { VerifyingSection } from '../components/VerifyingSection';
import { useNyfashionweekContext } from '../context';
import { RulesModal } from '../modals/RulesModal';

export const NyfashionweekPage: React.FC = () => {
  const { step, setStep, currentUser } = useNyfashionweekContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) return;
    fetch(
      'https://appreciate-fingerprinting-dyjcvwqkja-uc.a.run.app/enter_nyfw2022_drawing',
      {
        method: 'POST',
        body: JSON.stringify({ username: currentUser.primaryEmailAddress }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }, [currentUser]);

  const innerContent = useMemo(() => {
    if (step === 'Idle') {
      return (
        <IdleSection
          onNext={() => {
            setStep('Camera');
          }}
        />
      );
    }
    if (step === 'Camera') {
      return <CameraSection />;
    }
    if (step === 'Verifying') {
      return <VerifyingSection />;
    }
    if (step === 'Success') {
      return <SuccessSection />;
    }
    return <ErrorSection />;
  }, [setStep, step]);

  return (
    <div
      className={`min-h-screen font-maison-neue-book md:pb-0 ${
        step === 'Camera' ? 'bg-black flex flex-col' : 'bg-white pb-12'
      }`}
    >
      {step === 'Idle' && (
        <div className="lg:pt-12 pt-5 px-5 lg:px-0 lg:max-w-480-px mx-auto mb-8">
          <a
            className="inline-flex cursor-pointer"
            onClick={() => {
              router.push(routes.appFrontend.myWallet.fillPath(null));
            }}
          >
            <CloseIcon />
          </a>
        </div>
      )}
      <div className="px-5 lg:px-0 lg:max-w-480-px mx-auto pb-5 flex flex-col items-center flex-1">
        {innerContent}
      </div>
      <RulesModal />
    </div>
  );
};
