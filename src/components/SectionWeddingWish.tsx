import * as React from 'react';
import SectionWrapper from './SectionWrapper';
import Separator from './Separator';
import Skeleton from 'react-loading-skeleton';
const WishWidget = React.lazy(() => import('./WishWidget'));

const SectionWeddingWish = () => {
  return (
    <SectionWrapper
      className="bg-[#00000069] min-h-[200px]"
      id="section-wedding-wish"
    >
      <div className="relative p-5 w-full flex items-center flex-col justify-evenly">
        <h3 className="font-monsieur-lad text-4xl my-4 w-full">
          <Separator position="center" color="bg-white">
            <span className="font-cormorant mx-2 text-white">
              Wedding <span className="font-pinyon-script">Wish</span>
            </span>
          </Separator>
        </h3>

        <React.Suspense
          fallback={
            <div className="flex-1 w-full">
              <Skeleton height={300} baseColor="#dadada" />
            </div>
          }
        >
          <div className="animate-fade-up w-full">
            <WishWidget />
          </div>
        </React.Suspense>
      </div>
    </SectionWrapper>
  );
};

export default SectionWeddingWish;
