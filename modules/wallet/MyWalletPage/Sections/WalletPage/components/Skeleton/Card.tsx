import { WALLET_ITEM_GRID_IMAGE_SIZE } from '../../../../../../../consts/consts';

const { HEIGHT, WIDTH } = WALLET_ITEM_GRID_IMAGE_SIZE;

const aspectRatio = (HEIGHT / WIDTH) * 100;

export const SkeletonCard: React.FC = () => {
  return (
    <div
      data-testid="card-wrapper"
      className={`flex flex-row-reverse md:flex-col text-left md:text-center justify-between border border-gray-200 md:border-white hover:border-gray-300 active:border-gray-400 cursor-pointer bg-white rounded-sm md:w-72 p-5 w-full group relative`}
    >
      <div
        className="hidden md:block w-full h-0 relative mb-5"
        style={{ paddingBottom: `${aspectRatio}%` }}
      >
        <div className="absolute inset-0 bg-skeleton"></div>
      </div>
      <div className="md:hidden w-40 h-[141px] bg-skeleton"></div>
      <div>
        <div className="bg-skeleton-secondary w-36 md:w-48 h-4 mb-2.5" />
        <div className="h-6 flex items-center mb-2.5">
          <div className="bg-skeleton-secondary w-28 md:w-40 h-4" />
        </div>
        <div className="w-full h-6"></div>
      </div>
    </div>
  );
};
