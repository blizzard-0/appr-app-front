/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { PlusIcon } from './Icons';
import {
  StyledFaqHeroTitleWrapper,
  StyledFaqHeroSectionWrapper,
  StyledFaqSectionTitle,
} from './FaqPage.styled';

interface FaqProps {
  title: string;
  children?: React.ReactNode;
  open?: boolean;
}

const FaqPageHeading: React.FC = () => {
  return (
    <StyledFaqHeroSectionWrapper className="">
      <div className="w-full max-w-screen-xl px-5 md:px-20 xl:px-5 mx-auto ">
        <div className="mx-auto flex flex-col  gap-12">
          <StyledFaqHeroTitleWrapper className="xl:px-32">
            We're changing the way humans interact with their stuff — we
            expected some questions
          </StyledFaqHeroTitleWrapper>
        </div>
      </div>
    </StyledFaqHeroSectionWrapper>
  );
};

const Faq: React.FC<FaqProps> = ({ title, children, open = false }) => {
  return (
    <Disclosure as="div" defaultOpen={open}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex gap-6  font-semibold text-panda-dark maison-neue-medium text-base md:text-xl xl:text-2xl xl:leading-10 pb-4 lg:pb-2">
            <div className="md:pt-1 xl:pt-2">
              <div
                className={`transition  duration-300 ease-in-out ${
                  open ? 'transform rotate-45' : ''
                } `}
              >
                <PlusIcon />
              </div>
            </div>
            <span className="text-left hover:text-theme-red-3">{title}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-dark-gray-2 maison-neue-book text-base lg:text-2xl lg:leading-10 flex flex-col gap-4 pl-12">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const FaqSection: React.FC<{
  sectionTitle: string;
  children: React.ReactNode;
}> = ({ sectionTitle, children }) => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row gap-10 lg:gap-20 2xl:gap-40 pt-8 pb-10 lg:py-0">
        <StyledFaqSectionTitle className="lg:py-20 xl:py-14 ">
          {sectionTitle}
        </StyledFaqSectionTitle>
        <div className="lg:py-20 flex flex-col gap-8 lg:gap-14">{children}</div>
      </div>
    </>
  );
};

export const FaqPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />

      <FaqPageHeading />
      <section className=" px-5 lg:px-20 bg-light-gray pt-6 pb-16 lg:py-0">
        <div className="max-w-1280-px mx-auto">
          <FaqSection sectionTitle="About">
            <Faq title="What is appreciate?" open={true}>
              <div>
                appreciate is a technology platform with a mission to reduce
                waste by encouraging use. We are utilizing credentials to
                combine static inventory data with dynamic use data – enabling
                owners to digitally interact with their physical items, brands
                to engage with their customers post-purchase, and partners to
                provide more item utility.
              </div>
              <div>
                We're transforming the relationship between people and items by
                crafting a new data structure, enhancing the post-purchase
                experience, and enabling Web3 interoperability for all items.
              </div>
            </Faq>
            <Faq title="What do we do for our users?">
              <div>
                We enable users to verify, track, protect, share, and understand
                the items they own. Users upload their physical items into an
                appreciate wallet and can digitally interact with them.
              </div>
            </Faq>
            <Faq title="What do we do for brands and partners?">
              <div>
                We create credentials, a new structure that combines static and
                dynamic data. The appreciate credential is the first item
                identifier that can be digitally provisioned to customers at
                point-of-sale. Brands and partners gain more clarity around the
                post-purchase experience and are able to engage with their
                digital community of credential holders.
              </div>
            </Faq>
          </FaqSection>
          <FaqSection sectionTitle="Roadmap">
            <Faq title="What brands does appreciate currently support?">
              <div>
                We currently support the top 50 luxury brands including Chanel,
                Hermes, and Louis Vuitton. Our database grows daily.
              </div>
            </Faq>
            <Faq title="What item types does appreciate currently support?">
              <div>
                Owners can upload any type of item they own from the top 50
                luxury brands including Chanel, Hermes, and Louis Vuitton. These
                items can include but are not limited to handbags, watches, and
                shoes.
              </div>
            </Faq>
            <Faq title="I want to add everything I own to my appreciate wallet! What should I do?">
              <div>
                Owners can upload their items to their appreciate wallet in a
                multitude of ways. Once owners have created an appreciate
                account they can add items by:
              </div>
              <div>
                <ol className="list-decimal pl-8">
                  <li>
                    Forwarding their email receipts from luxury brands to
                    send@appreciate.it
                  </li>
                  <li>
                    Syncing their Gmail account to their appreciate account
                  </li>
                  <li>
                    Uploading photos of their luxury items and/or receipts
                  </li>
                  <li>Adding items to their account from the Explore page</li>
                </ol>
              </div>
            </Faq>
          </FaqSection>
          <FaqSection sectionTitle="Luxury Coverage">
            <Faq title="How much does it cost to cover my items?">
              <div>
                The standard premium is 1% of the value of the item (example:
                $50 premium to cover an item worth $5,000). For an accurate
                quote, request coverage for your item within your appreciate
                account.
              </div>
            </Faq>
            <Faq title="What are the benefits of luxury coverage?">
              <div>
                Coverage benefits are provided to appreciate members. The policy
                features the following benefits:
              </div>
              <div>
                <ul className="list-disc pl-8">
                  <li>
                    Worldwide coverage with no deductible for most causes of
                    loss.
                  </li>
                  <li>
                    No appraisals required. We just need a detailed description
                    and estimated value of your item.
                  </li>
                  <li>
                    Comprehensive coverage for damage from fire, theft,
                    earthquake, flood and breakage.
                  </li>
                  <li>
                    Newly acquired items are covered for up to 90 days with
                    itemized coverage.
                  </li>
                  <li>Top tier service on claims.</li>
                  <li>
                    Up to 150% replacement for a covered loss and the item’s
                    current market value exceeds the itemized limit, up to the
                    policy limit.
                  </li>
                </ul>
              </div>
            </Faq>
            <Faq title="What items qualify for luxury coverage?">
              <div>
                Luxury coverage policies are available for handbags and watches.
              </div>
            </Faq>
            <Faq title="How long does my luxury coverage policy last?">
              <div>
                A full calendar year from the day your policy is confirmed. You
                may auto-renew at the end of the term to extend your coverage.
              </div>
            </Faq>
            <Faq title="How do I file an incident report?">
              <div>
                Once an item is covered, you can notify us of a “Report” through
                your appreciate wallet. For additional assistance, please email{' '}
                <a
                  className="text-theme-indigo-3"
                  href="mailto:coverage@appreciate.it"
                >
                  coverage@appreciate.it
                </a>
                .
              </div>
            </Faq>
            <Faq title="How fast are incident reports resolved?">
              <div>Incident reports are resolved within 30 days.</div>
            </Faq>
            <Faq title="When can I cover luxury items other than handbags and watches?">
              <div>
                Expanded coverage options will become available throughout the
                rest of 2022.
              </div>
            </Faq>
            <Faq title="Aren't my items already covered by my homeowners policy and/or renter's insurance?">
              <div>
                This is likely not the case. Unfortunately, most insurance
                policies in the US require the submission of a rider document
                for any item with a value greater than $500.
              </div>
            </Faq>
          </FaqSection>
          <FaqSection sectionTitle="Contact">
            <Faq title="I'm an owner who wants to learn more about appreciate.">
              <div>
                Let's chat. Email us at{' '}
                <a
                  className="text-theme-indigo-3"
                  href="mailto:feedback@appreciate.it"
                >
                  feedback@appreciate.it
                </a>{' '}
                to learn more.
              </div>
            </Faq>
            <Faq title="I'm a brand who wants to create credentials with appreciate.">
              <div>
                We look forward to introducing you to the world of Web3 through
                our credentials. Email us at{' '}
                <a
                  className="text-theme-indigo-3"
                  href="mailto:brand@appreciate.it"
                >
                  brand@appreciate.it
                </a>{' '}
                to get started.
              </div>
            </Faq>
            <Faq title="I'm a member from the media who wants to get in touch.">
              <div>
                We're happy to speak with the press. Email us at{' '}
                <a
                  className="text-theme-indigo-3"
                  href="mailto:brand@appreciate.it"
                >
                  media@appreciate.it
                </a>{' '}
                and let’s chat.
              </div>
            </Faq>
          </FaqSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};
