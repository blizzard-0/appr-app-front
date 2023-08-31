/* eslint-disable @next/next/no-img-element */
import { Meta } from '../../../../components/Meta';

export const DeleteAccountLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Meta />
    <div className="flex flex-col justify-between max-w-md px-4 md:px-0 sm:w-screen mx-auto h-screen pb-16">
      <div className="flex-1 flex-col justify-between">
        <div className="flex flex-col justify-center mb-10 mt-20 lg:mt-40">
          <img
            src="/logo-header.svg"
            alt="Appreciate Logo Header"
            className="object-contain sm:max-w-max self-center h-32"
          />
        </div>
        {children}
      </div>
    </div>
  </>
);
