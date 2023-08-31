/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

import { TwoColSection } from '../components/TwoColSection';
import { ThreeColIconSection } from '../components/ThreeColIconSection';
import { HeroSection } from '../components/HeroSection';
import { MarketingIcon, InsightsIcon, ChainIcon } from './Icons';
const iconList = [
  {
    title: 'Chain of <br class="hidden lg:block xl:hidden"/>custody',
    icon: <ChainIcon />,
    content:
      'A ledger for ownership, enabling dynamic post-purchase experiences.',
  },
  {
    title: 'Market <br class="hidden lg:block xl:hidden"/>Insights',
    icon: <InsightsIcon />,
    content:
      'A ledger for actions, elucidating emerging ownership trends through aggregated data.',
  },
  {
    title: 'Intelligent <br class="hidden lg:block xl:hidden"/>marketing',
    icon: <MarketingIcon />,
    content:
      'A ledger for innovation, enabling targeted and autonomous campaigns.',
  },
];

export const BrandsPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header theme="purple" typeFormCTA={true} />

      <HeroSection
        title="Credentials power post-purchase experiences for luxury brands"
        content="Purchase credentials redefine ownership and post-purchase experiences for luxury brands and their owners. Brands can engage with a digital community of credential holders, enhancing automation, utility, and meaning."
        typeForm={true}
        ctaTitle="create credentials"
        image="/Hero-image-together.png"
        theme="purple"
        page="brands"
      ></HeroSection>
      <ThreeColIconSection
        title={
          'Credentials, receipts with <span class="maison-neue-extended-demi">superpowers</span>'
        }
        iconList={iconList}
      ></ThreeColIconSection>

      <TwoColSection
        title="Reimagining the receipt experience"
        image="/receipt_ledger.png"
        imagePosition="right"
        typeForm={true}
        ctaTitle="Delete the receipt"
        theme="purple"
      >
        Each purchase and its authenticity is recorded as a credential on the
        Owner Ledger. Credentials become the record of all key ownership actions
        after purchase.
      </TwoColSection>

      <TwoColSection
        title="Digital Unboxings merge the physical and digital"
        image="/Box_and_cards.png"
        imagePosition="left"
        typeForm={true}
        ctaTitle="create digital memories"
        theme="green"
      >
        The joy of unboxing a purchase shouldn’t be limited to the physical
        world. Digital Unboxings make lasting impressions on owners and invite
        them to engage with their items virtually.
      </TwoColSection>

      <TwoColSection
        title="Meaningful ownership engagement"
        image="/notif-phone.png"
        imagePosition="right"
        typeForm={true}
        ctaTitle="engage your community"
        theme="pink"
      >
        Push notifications shouldn’t be pushy. Create high-impact marketing
        campaigns that target your owners based on their ownership activity,
        collection, and habits.
      </TwoColSection>

      <TwoColSection
        title="Built to be interoperable"
        image="/INTEROPERABLE.png"
        imagePosition="left"
        typeForm={true}
        ctaTitle="be web3 ready"
        theme="yellow"
      >
        appreciate is the foundation of your Web3 strategy. Our platform
        launches luxury brands into Web3 with the principles of autonomy,
        utility, and scalability.
      </TwoColSection>

      <Footer />
    </div>
  );
};
