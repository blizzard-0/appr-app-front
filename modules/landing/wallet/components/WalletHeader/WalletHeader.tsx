/* eslint-disable @next/next/no-img-element */

interface WalletHeaderProps {
  avatarImage: string;
  fullName: string;
  totalCount: number;
  numVerifiedWalletItems: number;
  totalValue: string;
}
interface AvatarProps {
  userName: string;
  avatarUrl: string;
}

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  avatarImage,
  fullName,
  totalCount,
  numVerifiedWalletItems,
  totalValue,
}) => {
  return (
    <>
      <section className="md:py-10 flex items-center justify-center font-maison-neue-book bg-gray-100 border-b-px border-gray-300 py-8">
        <div className="w-full">
          <Avatar avatarUrl={avatarImage} userName={fullName} />
          <div className="grid grid-cols-3 pt-8 md:pt-10 w-full md:w-c-wallet-stats mx-auto px-5 md:px-0">
            <div className={'text-center border-r-px border-gray-300'}>
              <dt className="font-maison-neue-demi text-xl md:text-heading mb-0.5 md:mb-2 leading-6 md:leading-10 tracking-0.02em">
                {totalCount}
              </dt>
              <dd className="text-sm md:text-base leading-5 md:leading-6 text-gray-500 tracking-0.02em">
                Items
              </dd>
            </div>
            <div className={'text-center border-r-px border-gray-300'}>
              <dt className="font-maison-neue-demi text-xl md:text-heading mb-0.5 md:mb-2 leading-6 md:leading-10 tracking-0.02em">
                {numVerifiedWalletItems}
              </dt>
              <dd className="text-sm md:text-base leading-5 md:leading-6 text-gray-500 tracking-0.02em">
                Verified
              </dd>
            </div>
            <div className={'text-center'}>
              <dt className="font-maison-neue-demi text-xl md:text-heading mb-0.5 md:mb-2 leading-6 md:leading-10 tracking-0.02em">
                {totalValue}
              </dt>
              <dd className="text-sm md:text-base leading-5 md:leading-6 text-gray-500 tracking-0.02em">
                Value
              </dd>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Avatar: React.FC<AvatarProps> = ({ avatarUrl, userName }) => {
  return (
    <>
      <div className="group w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gray-250 text-white flex justify-center items-center mx-auto relative">
        <img
          className="w-full h-full rounded-full object-cover"
          src={avatarUrl}
          alt="user_avatar"
        />
      </div>
      <div className="mt-4 uppercase leading-6 tracking-wider font-medium text-gray-800 text-center">
        {userName}
      </div>
    </>
  );
};
