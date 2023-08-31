/* eslint-disable @next/next/no-img-element */
import { AppButton, Logo } from '@/components/v2';
import { routes } from '@/modules/routes';
import { useRouter } from 'next/router';
import { useNyfashionweekContext } from '../../context';

type IdleSectionProps = {
  onNext: () => void;
};

export const IdleSection: React.FC<IdleSectionProps> = ({ onNext }) => {
  const { setShowRules } = useNyfashionweekContext();
  const router = useRouter();
  return (
    <>
      <Logo $variant="small" />
      <div className="h-px bg-black mt-4 mb-3 w-32"></div>
      <h1 className="font-maison-neue-extended text-xl">NYFW22</h1>
      <div className="mt-11 text-center">
        <div className="flex justify-center mb-10">
          <img
            src="https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1662628237/nyfashionweek/balenciaga_igoa6z.png"
            width="150"
            height="183"
            alt="NYFW22"
          />
        </div>
        <h1 className="font-maison-neue-extended text-2xl mb-2">
          Identify the bag
        </h1>
        <p className="font-maison-neue-medium text-base text-dark-gray-2 leading-6">
          Test the accuracy of our machine learning technology by taking a photo
          to tell these {`“`}identical{`”`} bags apart.
        </p>
        <p className="font-maison-neue-medium text-base text-dark-gray-2 leading-6 mt-4">
          Once you submit a photo for fingerprinting, you’ll be entered in a
          drawing to win a Le Cagole bag. Check out the{' '}
          <span
            className="text-indigo cursor-pointer"
            onClick={() => setShowRules(true)}
          >
            Official Rules
          </span>{' '}
          for more details.{' '}
          <span
            className="text-indigo cursor-pointer"
            onClick={() => {
              router.push(routes.appFrontend.tos.fillPath(null));
            }}
          >
            Terms and conditions apply.
          </span>
        </p>
        <AppButton className="mt-8" $block onClick={onNext}>
          Take a photo
        </AppButton>
      </div>
    </>
  );
};
