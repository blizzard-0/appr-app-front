import { AppButton } from '@/components/v2';
import { useNyfashionweekContext } from '../../context';
import { NYFWItem } from '../IdleSection/components/NYFWItem';

export const ErrorSection: React.FC = () => {
  const { setStep, errorMessage } = useNyfashionweekContext();
  return (
    <div className="pt-12 flex flex-col items-center justify-center">
      <NYFWItem />
      <h1 className="font-maison-neue-extended text-xl mb-2 mt-8">
        {errorMessage}
      </h1>
      <AppButton
        $block
        className="mt-3"
        onClick={() => {
          setStep('Camera');
        }}
      >
        Try again
      </AppButton>
    </div>
  );
};
