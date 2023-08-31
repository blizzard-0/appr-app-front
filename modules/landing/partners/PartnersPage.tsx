/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

import { TwoColSection } from '../components/TwoColSection';
import { ThreeColIconSection } from '../components/ThreeColIconSection';
import { HeroSection } from '../components/HeroSection';

import { MarketingIcon, UtilityIcon, ChainIcon } from './Icons';

const iconList = [
  {
    title: 'Chain of <br class="hidden lg:block 2xl:hidden"/>Custody',
    icon: <ChainIcon />,
    content:
      'A ledger for ownership, creating post-purchase experiences for owners and the luxury items they own.',
  },
  {
    title: 'Immediate Item <br class="hidden lg:block 2xl:hidden"/>Utility',
    icon: <UtilityIcon />,
    content:
      'A ledger for actions, enabling owners to discover and enjoy enhanced item utility through their digital wallet.',
  },
  {
    title: 'Intelligent <br class="hidden lg:block 2xl:hidden"/>Marketing',
    icon: <MarketingIcon />,
    content:
      'A ledger for innovation, providing a targeted and and autonomous marketing  campaigns based on item ownership.',
  },
];

export const PartnersPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header theme="yellow" typeFormCTA={true} />

      <HeroSection
        title="Digital community connecting owners and their items to partners"
        content="Purchase credentials enable partners to create post-purchase experiences for owners. Our partners gain access to a digital community of credential holders, providing them with enhanced item utility."
        typeForm={true}
        ctaTitle="JOIN OUR ECOSYSTEM"
        image="/partners-hero-image.png"
        theme="yellow"
        page="partners"
      ></HeroSection>
      <ThreeColIconSection
        title={
          'Impactful post-purchase experiences <br/><span class="maison-neue-extended-demi">powered by credentials</span>'
        }
        iconList={iconList}
      ></ThreeColIconSection>

      <TwoColSection
        title="Finding the right audience"
        image="/Feature_receipt_ledger.png"
        imagePosition="right"
        typeForm={true}
        ctaTitle="CONNECT WITH YOUR AUDIENCE"
        theme="yellow"
        bgType="3"
      >
        Purchases, item authenticity, and key ownership actions are recorded as
        credentials on the Owner Ledger. Your digital community includes all
        credentials holders.
      </TwoColSection>

      <TwoColSection
        title="Connecting with owners in their pockets"
        image="/push-notifications.png"
        imagePosition="left"
        ctaTitle="join the community"
        theme="purple"
        bgType="3"
        typeForm={true}
      >
        Brands aren’t the only ones who can create meaningful post-purchase
        experiences. Build brand loyalty with luxury owners by enabling them to
        engage with your products in new ways.
      </TwoColSection>

      <TwoColSection
        title="Partnerships based on utility"
        image="/Feature-INVITE.png"
        imagePosition="right"
        typeForm={true}
        ctaTitle="connect with brands"
        theme="green"
        bgType="3"
      >
        We love a good collab. The appreciate ecosystem enables brands and
        partners to ideate and execute more memorable ownership experiences –
        enhanced by credentials.
      </TwoColSection>

      <Footer />
    </div>
  );
};
