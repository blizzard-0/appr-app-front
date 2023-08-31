/* eslint-disable @next/next/no-img-element */
import { FloatingDots } from '@/components/v2';

export const VerifyingSection: React.FC = () => {
  return (
    <div className="pt-12 flex flex-col items-center justify-center">
      <img
        src="https://res.cloudinary.com/appreciate-stuff-inc/image/upload/v1662628237/nyfashionweek/balenciaga_igoa6z.png"
        width="150"
        height="183"
        alt="NYFW22"
      />
      <h1 className="font-maison-neue-extended text-xl my-8">
        Scanning fingerprint...
      </h1>
      <FloatingDots />
    </div>
  );
};
