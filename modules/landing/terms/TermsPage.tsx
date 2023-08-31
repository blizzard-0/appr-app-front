/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import {
  StyledTermsHeroSectionWrapper,
  StyledTermsHeroTitleWrapper,
  StyledTermsSectionTitleWrapper,
} from './Terms.styled';

const TermsPageSectionTitle: React.FC<{
  id: string;
  children?: React.ReactNode;
}> = ({ children, id }) => {
  return (
    <>
      <a className="block relative invisible -top-16" id={id}></a>
      <div className="py-4 lg:py-8">
        <StyledTermsSectionTitleWrapper className="">
          {children}
        </StyledTermsSectionTitleWrapper>
      </div>
      <div className="w-full h-0 border-b border-panda-dark"></div>
    </>
  );
};

const TermsPageSectionContent: React.FC<{
  paddingtop?: boolean;
  children?: React.ReactNode;
}> = ({ children, paddingtop = true }) => {
  return (
    <div className={`pb-11  lg:pb-20  ${paddingtop ? 'pt-5 lg:pt-12' : ''} `}>
      {children}
    </div>
  );
};

const TermsPageSectionParagraph: React.FC<{
  italic?: boolean;
  bold?: boolean;
  children?: React.ReactNode;
}> = ({ children, italic = false, bold = false }) => {
  return (
    <p
      className={`mb-5 lg:mb-6 last:mb-0 ${italic ? 'italic' : ''} ${
        bold ? ' font-maison-neue-medium font-semibold' : ''
      }`}
    >
      {children}
    </p>
  );
};

const TermsPageSectionList: React.FC<{
  listType?: string;
  children?: React.ReactNode;
}> = ({ children, listType = 'list-disc' }) => {
  return (
    <ul className={`${listType}  pl-4 mb-5 lg:mb-6 lg:ml-10`}>{children}</ul>
  );
};

export const TermsPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />
      <div className="">
        <StyledTermsHeroSectionWrapper>
          <h3 className="font-maison-neue-book uppercase text-xl lg:text-2xl text-center pb-8 lg:pb-10 tracking-widest">
            Appreciate Stuff, Inc.
          </h3>
          <StyledTermsHeroTitleWrapper>
            Terms Of Service & End User <br className="hidden lg:block" />
            License Agreement
          </StyledTermsHeroTitleWrapper>
        </StyledTermsHeroSectionWrapper>

        <div className="w-full mx-auto lg:max-w-1280-px mx-auto px-5 lg:px-10 pt-2 pb-20 lg:pb-44 text-panda-dark maison-neue-book text-base lg:text-2xl lg:leading-9">
          <div>
            <TermsPageSectionParagraph>
              Appreciate Stuff, Inc. (“Appreciate Stuff,” “we,” “us,” or “our”)
              owns and operates the www.appreciatestuff.com website(s) (the
              “Site(s)”) and the appreciate online and/or mobile application(s)
              (the “App(s)”). This document explains the terms by which you may
              use our Site(s), App(s) and any underlying software or services
              provided on or through the Site(s) and/or App(s) (collectively,
              the “Services”). The following Terms of Service &amp; End User
              License Agreement (“Agreement”) applies to anyone (“you”) who
              registers or creates an account for the Services (a “User
              Account”) or otherwise uses any portion of the Services. All use
              of the Services by you and any other user of the Services is
              subject to the terms and conditions contained in this Agreement.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              This Agreement only applies to the Services identified above.
              Other sites, apps, services, or other online content may have
              their own terms or conditions of use which should be reviewed.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              Appreciate Stuff may offer promotions, sweepstakes, contests, or
              features that have their own special terms, and to the extent any
              portion of those special terms conflict with the terms of this
              Agreement, the special terms will govern for that specific portion
              unless stated otherwise.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              This Agreement is effective as of the 16th day of October, 2021.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              <strong className="font-maison-neue-medium font-semibold">
                IMPORTANT, PLEASE READ THIS AGREEMENT CAREFULLY
              </strong>
              : THIS AGREEMENT CONSTITUTES A LEGAL CONTRACT BETWEEN YOU AND
              APPRECIATE STUFF, GOVERNS YOUR ACCESS TO AND USE OF THE SERVICES,
              AND CONTAINS IMPORTANT LIMITATIONS, REPRESENTATIONS, WARRANTIES,
              DISCLAIMERS, CONDITIONS, REMEDIES, AND LIABILITIES THAT ARE
              APPLICABLE TO THE SERVICES. BY ACCESSI seeNG OR USING THE
              SERVICES, BY CREATING A USER ACCOUNT, OR BY CLICKING A BUTTON OR
              CHECKING A BOX INDICATING YOUR ACCEPTANCE OF THIS AGREEMENT, YOU
              REPRESENT THAT YOU ARE OLD ENOUGH TO ENTER INTO A BINDING LEGAL
              AGREEMENT IN THE JURISDICTION WHERE YOU RESIDE AND ACKNOWLEDGE
              THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS
              AGREEMENT WITHOUT MODIFICATION. APPRECIATE STUFF RESERVES THE
              RIGHT TO MODIFY THIS AGREEMENT AND WILL PROVIDE NOTICE OF THESE
              CHANGES AS DESCRIBED BELOW.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              IF YOU ARE AN AGENT OR EMPLOYEE OF AN ENTITY, YOU REPRESENT AND
              WARRANT THAT: (1) THE INDIVIDUAL ACCEPTING THIS AGREEMENT IS
              AUTHORIZED TO ACCEPT THIS AGREEMENT ON BEHALF OF SUCH ENTITY AND
              MAY BIND SUCH ENTITY TO THE TERMS OF THIS AGREEMENT; AND (2) SUCH
              ENTITY HAS FULL POWER AND AUTHORITY, CORPORATE OR OTHERWISE, TO
              ENTER INTO THIS AGREEMENT AND PERFORM ITS OBLIGATIONS HEREUNDER.
              THE SERVICES ARE NOT AVAILABLE TO PERSONS OR ENTITIES WHO ARE NOT
              LEGALLY ELIGIBLE TO BE BOUND BY THIS AGREEMENT. IF YOU DO NOT OR
              CANNOT AGREE TO BE SO BOUND, YOU ARE NOT AUTHORIZED TO USE THE
              SERVICES. DO NOT USE THE SITE OR APP, ANY OF THE CONTENT AVAILABLE
              ON OR THROUGH THE SITE OR APP, OR ANY OTHER SERVICES IF YOU ARE
              UNWILLING OR UNABLE TO BE BOUND BY THE TERMS OF THIS AGREEMENT.
              YOUR RIGHTS TO USE THE SERVICES ARE LIMITED BY APPLICABLE FEDERAL,
              STATE, AND LOCAL LAWS AND REGULATIONS.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL ARBITRATION
              PROVISION IN SECTION 14.2 (THE “ARBITRATION AGREEMENT”) AND CLASS
              ACTION/JURY TRIAL WAIVER PROVISION IN SECTION 14.3 (THE “CLASS
              ACTION/JURY TRIAL WAIVER”) THAT REQUIRE, UNLESS YOU OPT OUT
              PURSUANT TO THE INSTRUCTIONS IN SECTION 14.2, THE EXCLUSIVE USE OF
              FINAL AND BINDING ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE
              DISPUTES BETWEEN YOU AND APPRECIATE STUFF, INCLUDING ANY CLAIMS
              THAT AROSE OR WERE ASSERTED BEFORE YOU AGREED TO THESE TERMS. TO
              THE FULLEST EXTENT PERMITTED BY LAW, YOU EXPRESSLY WAIVE YOUR
              RIGHT TO SEEK RELIEF IN A COURT OF LAW AND TO HAVE A JURY TRIAL ON
              YOUR CLAIMS, AS WELL AS YOUR RIGHT TO PARTICIPATE AS A PLAINTIFF
              OR CLASS MEMBER IN ANY CLASS, COLLECTIVE, PRIVATE ATTORNEY GENERAL
              OR REPRESENTATIVE ACTION OR PROCEEDING.
            </TermsPageSectionParagraph>
            <TermsPageSectionParagraph>
              In accordance with 47 U.S.C. § 230, parents should be aware that
              there are parental control protections (such as computer hardware,
              software, or filtering services) that are commercially available
              and may assist them in limiting access to material that is harmful
              to minors. Examples of some of these protection services include
              Qustodio, Net Nanny and Kaspersky Safe Kids. Please note that
              Appreciate Stuff in no way endorses or is responsible for these
              services.
            </TermsPageSectionParagraph>
          </div>
          <div className="mt-12 mb-11 lg:mb-20">
            <h4 className="font-semibold uppercase text-base lg:text-2xl lg:leading-9 mb-6 font-maison-neue-medium">
              Table of Contents
            </h4>
            <ul className="font-bold text-base font-maison-neue-book text-base lg:text-2xl lg:leading-9">
              <li className="mb-2">
                <a href="#our-services">1. Our Services</a>
              </li>
              <li className="mb-2">
                <a href="#proprietary-rights">2. Our Proprietary Rights</a>
              </li>
              <li className="mb-2">
                <a href="#digital-assets">3. Digital Assets; Purchases</a>
              </li>
              <li className="mb-2">
                <a href="#no-professional-advice">4. No Professional Advice</a>
              </li>
              <li className="mb-2">
                <a href="#2fa-and-auto-calls">
                  5. Two-Factor Authentication and Autodialed Calls / Texts
                </a>
              </li>
              <li className="mb-2">
                <a href="#user-generated-content">6. User Generated Content</a>
              </li>
              <li className="mb-2">
                <a href="#dmca-notice-procedure">7. DMCA Notice Procedure</a>
              </li>
              <li className="mb-2">
                <a href="#acceptable-use-policy">8. Acceptable Use Policy</a>
              </li>
              <li className="mb-2">
                <a href="#security">9. Security</a>
              </li>
              <li className="mb-2">
                <a href="#3rd-party-links">
                  10. Third-Party Links and Information
                </a>
              </li>
              <li className="mb-2">
                <a href="#idemnity">11. Idemnity</a>
              </li>
              <li className="mb-2">
                <a href="#no-wrranty">12. No Warranty</a>
              </li>
              <li className="mb-2">
                <a href="#limitation">13. Limitation of Liability</a>
              </li>
              <li className="mb-2">
                <a href="#governing-law">
                  14. Governing Law, Arbitration, and Class Action/Jury Trial
                  Waiver
                </a>
              </li>
              <li className="mb-2">
                <a href="#additional-terms">
                  15. Additional Terms for the App(s)
                </a>
              </li>
              <li>
                <a href="#general">16. General</a>
              </li>
            </ul>
          </div>
          <div>
            <TermsPageSectionTitle id="our-services">
              1. Our Services
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                Appreciate Stuff provides a place for users to digitally catalog
                their goods within their "Appreciate" wallet. The Services are
                intended for communication, transactional, informational, and
                entertainment purposes as well as other interactive uses. You
                may choose to use the Services for other purposes, subject to
                the terms and limitations of this Agreement. You agree you will
                only use the Services for their intended purposes, and not for
                other commercial ventures without first seeking approval from
                Appreciate Stuff. You may not use the Services to establish any
                independent data files, databases, compendiums, or any other
                reference materials.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph bold={true}>
                1.1 Eligibility
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You may use the Services only if you can form a binding contract
                with Appreciate Stuff, and only in compliance with this
                Agreement and all applicable local, state, national, and
                international laws, rules and regulations. You further represent
                that you are not a citizen, resident, or member of any
                jurisdiction or group that is subject to economic sanctions by
                the United States, or where your use of the Services would be
                illegal or otherwise violate any applicable law. Any use of or
                access to the Services by anyone under the age of 13 years old
                (or under the age of 16 years old in Europe or younger than the
                age of majority in the applicable foreign jurisdiction) is
                strictly prohibited and in violation of this Agreement. In
                addition, if you are under 18 years old, you may use the
                Services only with the approval of your parent or guardian. The
                Services are not available to any users previously removed from
                the Services by Appreciate Stuff. By entering into this
                Agreement, you represent and warrant that you meet the following
                minimum requirements (“Eligibility Requirements”): (i) you have
                the necessary rights and authority to enter into and perform the
                obligations required of you as a User Account (as defined in
                Section 1.3) holder under this Agreement; (ii) all account and
                billing information, and all data and information which you
                transmit using the Services (collectively, “Account Data”) is
                and will remain within your right to use and is accurate,
                complete and current; (iii) your use of the Services will comply
                with all applicable laws and regulations; and (iv) you will not
                infringe the rights of any third party (including, without
                limitation, any intellectual property rights or privacy rights)
                in your use of the Services.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Use of the Services may require one or more compatible devices,
                Internet access (fees may apply), and certain software (fees may
                apply), and may require obtaining updates or upgrades from time
                to time. Because use of the Services involves hardware,
                software, and Internet access, your ability to access and use
                the Services may be affected by the performance of these
                factors. High speed Internet access is recommended.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.2 Limited License
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Subject to the terms and conditions of this Agreement,
                Appreciate Stuff hereby grants to you a non-exclusive, limited,
                non-transferable, non-sublicensable, freely revocable right and
                license to access and use the Services as permitted by the
                features of the Services and in a manner that is consistent with
                the other terms of this Agreement and the intended purpose of
                the Services. You agree this is the grant of a license, not a
                transfer of title, and under this license you may not attempt to
                decompile or reverse engineer any software contained on or
                through our Services or transfer the AS Content (as defined
                below) that is available through the Services to another person
                or “mirror” such content on any other server. Appreciate Stuff
                reserves all rights not expressly granted herein with respect to
                the Services and the AS Content. To the extent permitted by law,
                Appreciate Stuff may terminate this license at any time for any
                reason or no reason including, but not limited to, for breach of
                any term contained in this Agreement. All rights not expressly
                granted to you are reserved by Appreciate Stuff and its
                licensors.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.3 User Accounts
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Your User Account gives you access to the Services and
                functionality that we may establish and maintain from time to
                time and in our sole discretion. We may maintain different types
                of User Accounts for different types of users. If you open a
                User Account on behalf of a company, organization, or other
                entity, then (i) “you” includes you and that entity, and (ii)
                you represent and warrant that you are an authorized
                representative of the entity with the authority to bind the
                entity to this Agreement, and that you agree to this Agreement
                on the entity's behalf. By connecting to Appreciate Stuff with a
                third-party service, you give us permission to access and use
                your information from that third-party service as permitted by
                that service, and to store your log-in credentials for that
                service.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You may never use another user's User Account without
                permission. When creating your User Account, you must provide
                accurate and complete information, and you must keep this
                information up to date. You are solely responsible for the
                activity that occurs on your User Account, and you must keep
                your User Account password secure. We encourage you to use
                “strong” passwords (passwords that use a combination of upper
                and lower case letters, numbers and symbols) with your User
                Account. You must notify Appreciate Stuff immediately of any
                breach of security or unauthorized use of your User Account.
                Appreciate Stuff will not be liable for any losses caused by any
                unauthorized use of your User Account. Appreciate Stuff may
                investigate any complaints and violations that come to its
                attention with respect to your User Account and may take any (or
                no) action it believes is appropriate in response to such
                matters including, but not limited to, issuing warnings,
                removing any content at issue, and/or terminating User Accounts.
                Under no circumstances will Appreciate Stuff be liable in any
                way for any data or other content transmitted or viewed by you
                or any other users of the Services including, but not limited
                to, any errors or omissions in any such data or content, or any
                loss or damage of any kind incurred as a result of the use of,
                access to, or denial of access to any data or content. Without
                limiting any of its other rights or remedies, Appreciate Stuff
                reserves the right to suspend your access to the Services if
                Appreciate Stuff reasonably believes that you have materially
                violated the restrictions and obligations in this Agreement. If
                Appreciate Stuff suspends or terminates your User Account, you
                acknowledge that all Account Data and other information and
                content associated with your User Account will no longer be
                available to you.{' '}
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You may be able to control the profile on your User Account and
                how you interact with the Services by changing the settings in
                your User Account. By providing your email address to Appreciate
                Stuff, you consent to us using the email address to send you
                notices and communications related to the Services, including
                any notices required by law, in lieu of communication by postal
                mail. We may also use your email address to send you other
                messages, such as changes to features of the Services and
                special offers. If you do not want to receive such email
                messages, you may opt out or change your preferences in your
                settings page. Opting out may prevent you from receiving email
                messages regarding updates, improvements, or offers.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                As the holder of a User Account, you agree that you shall: (i)
                reasonably cooperate with Appreciate Stuff in all matters
                relating to the Services; (ii) respond promptly to any request
                from Appreciate Stuff to provide information, approvals,
                authorizations, or decisions that are reasonably necessary for
                Appreciate Stuff to provide the Services in accordance with the
                terms of this Agreement; and (iii) provide such materials or
                information as Appreciate Stuff may reasonably request so that
                we can provide the Services and ensure that such materials or
                information are complete and accurate in all material respects.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.4 Service Rules
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You agree not to engage in any of the following prohibited
                activities on or through the Services: (i) copying,
                distributing, or disclosing any part of the Services in any
                medium, including without limitation by any automated or
                non-automated “scraping”; (ii) using any automated system,
                including without limitation “robots,” “spiders,” “offline
                readers,” etc., to access the Services in a manner that sends
                more request messages to the Appreciate Stuff servers than a
                human can reasonably produce in the same period of time by using
                a conventional online web browser (except that Appreciate Stuff
                grants the operators of public search engines revocable
                permission to use spiders to copy publicly available materials
                from the Services for the sole purpose of and solely to the
                extent necessary for creating publicly available and searchable
                indices of the materials, but not caches or archives of such
                materials); (iii) transmitting spam, chain letters, or other
                unsolicited email; (iv) attempting to compromise or interfere
                with the integrity or security of Appreciate Stuff's system; (v)
                deciphering any transmissions to or from the servers running the
                Services; (vi) taking any action that imposes, or may impose at
                our sole discretion an unreasonable or disproportionately large
                load on our infrastructure; (vii) uploading invalid data,
                viruses, worms, or other software agents through the Services;
                (viii) collecting or harvesting from the Services any personal
                data, personal information or personally identifiable
                information, as defined under applicable privacy laws or
                regulations (“Personal Information”); (ix) using the Services
                for any commercial solicitation purposes; (x) impersonating
                another person or otherwise misrepresenting your affiliation
                with a person or entity, conducting fraud, hiding or attempting
                to hide your identity; (xi) interfering with the proper working
                of the Services; (xii) accessing any content on the Services
                through any technology or means other than those provided or
                authorized by the Services; (xiii) engaging in any behavior that
                is designed to hack into or gain unauthorized access to
                protected areas of the Services and/or Appreciate Stuff's
                computers, servers or networks, or any other users' computers or
                systems; (xiv) making unauthorized deletions or alterations with
                respect to any material posted on or through the Services by
                Appreciate Stuff or any other person or entity; (xv) causing
                Appreciate Stuff to violate any applicable law, rule or
                regulation, including those regarding the export of technical
                data; or (xvi) bypassing the measures we may use to prevent or
                restrict access to the Services, including without limitation
                features that prevent or restrict use or copying of any content
                or enforce limitations on use of the Services or the content
                therein.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.5 Changes to the Services and this Agreement
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You understand and agree that Appreciate Stuff may, without
                prior notice: (a) change the Services; (b) stop providing the
                Services or features of the Services to you or to users
                generally; (c) or create usage limits for the Services. We may
                permanently or temporarily terminate or suspend your access to
                the Services without notice and liability for any reason,
                including if in our sole determination you violate any provision
                of this Agreement, or for no reason. Upon termination for any
                reason or no reason, you continue to be bound by this Agreement.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You understand and agree that Appreciate Stuff may modify this
                Agreement at any time without prior notice. You should visit the
                Site(s) or access the App from time to time to review the
                current version of this Agreement. In the event of a
                modification to this Agreement, you will be prompted to accept
                the Agreement as modified when you next log in to the Services.
                If you do not accept the terms of the Agreement as so modified,
                you shall not be permitted to log in to the Services. You may
                read a current, effective version of this Agreement at any time
                by selecting the applicable link on the Site(s)
                (http://www.appreciatestuff.com/tos). By using any Services
                subsequent to any modification of this Agreement, you agree to
                be bound by such modification(s).
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.6 Disputes with Other Users
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                In using the Services, you may interact with other User Account
                holders and users of the Services. You are solely responsible
                for your interactions with other users and agree to use the
                Services in a manner that is legal, respectable, and consistent
                with the terms of this Agreement. We reserve the right, but have
                no obligation, to monitor disputes between you and other users.
                Appreciate Stuff shall have no liability for your interactions
                with other users, or for any user's action or inaction.
                Appreciate Stuff is not responsible for the conduct of any other
                User Account holder or other users of the Services who may
                interact with you, regardless of whether or not it is done
                through the Services.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.7 No Fiduciary Duties; Digital Asset Representations
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                This Agreement does not, and is not intended to, create or
                impose any fiduciary duties on Appreciate Stuff. You acknowledge
                and agree that, to the fullest extent permitted by law,
                Appreciate Stuff owes neither you nor any other party any
                fiduciary duties or liabilities, and that, to the extent any
                such duties or liabilities may exist at law or in equity, such
                duties and liabilities are hereby irrevocably disclaimed, waived
                and otherwise eliminated. You further acknowledge and agree that
                Appreciate Stuff only owes you the duties and obligations
                expressly stated in this Agreement.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                By accessing and using the Services, you represent that: (i) you
                have a working knowledge of use and details of digital assets;
                (ii) you understand that markets for such digital assets are
                highly volatile, due to factors including but not limited to
                adoption, speculation, technology, security, and regulation; and
                (iii) you understand the risk that digital assets may lose some
                or all value. You acknowledge that Appreciate Stuff is not
                responsible for any of the foregoing variables or risks, and
                cannot be held liable for any resulting losses that you
                experience while accessing or using the Services. Further, you
                understand and agree to assume full responsibility for all risk
                of accessing and using the Services. ]
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                1.8 Service Location
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The Services are controlled and operated from facilities in the
                United States. Appreciate Stuff makes no representations that
                the Services are appropriate or available for use in other
                locations. Those who access or use the Services from other
                jurisdictions do so at their own volition and are entirely
                responsible for compliance with all applicable United States and
                local laws and regulations, including but not limited to export
                and import regulations. You may not use the Services if you are
                a resident of a country embargoed by the United States, or are a
                foreign person or entity blocked or denied by the United States
                government. Unless otherwise explicitly stated, all materials
                found on or through the Services are solely directed to
                individuals, companies, or other entities located in the United
                States.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="proprietary-rights">
              2. Our Proprietary Rights
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                Other than the exceptions referenced in this Agreement, the
                major exception being user generated content which remains the
                property of the respective User Account holder or other users of
                the Services that upload or post such content as set forth in
                Section 6, below, the Services and all content or materials
                therein or transferred thereby, including, without limitation,
                software, images, text, data, links, graphics, illustrations,
                organization and layout, color selections, logos, patents,
                names, trademarks, service marks, copyrights, photographs,
                audio, videos, and music (collectively, the “AS Content”), are
                protected by United States and international copyright laws or
                other applicable intellectual property laws related thereto. All
                AS Content is either the exclusive property of Appreciate Stuff
                or made available through arrangements with third parties.
                Except as explicitly provided herein, nothing in this Agreement
                shall be deemed to create a license in or to any such AS
                Content, and you agree not to sell, license, rent, modify,
                distribute, copy, reproduce, transmit, publicly display,
                publicly perform, publish, adapt, edit or create derivative
                works from any AS Content except as permitted under this
                Agreement. No other use is permitted without Appreciate Stuff's
                prior written consent. You acknowledge that no right, title, or
                interest in or to any AS Content is transferred to you as a
                result of you accessing, downloading, or printing any AS
                Content. The use or posting of any AS Content on any other web
                site or in a networked computer environment for any purpose is
                expressly prohibited. If you violate any part of this Agreement,
                your right to access and/or use the AS Content and the Services
                shall automatically terminate and you shall immediately destroy
                any copies you have made of the AS Content. AS Content protected
                by this Section 2 includes, without limitation, certain
                third-party copyrighted images made available on or through the
                Services. You acknowledge that you have no rights in such
                third-party AS Content. Use of the AS Content for any purpose
                not expressly permitted by this Agreement is strictly prohibited
                and potentially a violation of copyright, trademark, and other
                applicable laws related to intellectual property protections.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You may choose to or we may invite you to submit comments or
                ideas about the Services, including without limitation about how
                to improve the Services or our products (“Idea(s)”). By
                submitting any Idea, you agree that your disclosure is
                gratuitous, unsolicited and without restriction and will not
                place Appreciate Stuff under any fiduciary or other obligation,
                and that we are free to use the Idea without any additional
                compensation to you, and/or to disclose the Idea on a
                non-confidential basis or otherwise to anyone. You further
                acknowledge that, by acceptance of your submission, Appreciate
                Stuff does not waive any rights to use similar or related ideas
                previously known to Appreciate Stuff, or developed by its
                employees, or obtained from sources other than you.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                APPRECIATE STUFF and other trademarks, service marks, and logos
                used and displayed on or through the Services are registered or
                unregistered trademarks or service marks of Appreciate Stuff
                (the “AS Trademarks”). Other company, product, and service names
                available through the Services may be trademarks or service
                marks owned by third parties (the “Third-Party Trademarks” and,
                collectively with the AS Trademarks, the “Trademarks”). Nothing
                available on or through the Services or in this Agreement should
                be construed as granting, by implication, estoppel, or
                otherwise, any license or right to use any Trademarks displayed
                on or through the Services without the prior written consent of
                Appreciate Stuff for each such specific use. Use of any
                Trademarks as part of a link to or from any web site is
                prohibited without Appreciate Stuff's prior written consent. All
                goodwill generated from the use of any AS Trademarks shall inure
                to Appreciate Stuff's benefit. All rights not expressly granted
                herein are reserved to Appreciate Stuff.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The Services contain data, information, and other content not
                owned by you (“AS Property”). You understand and agree that
                regardless of terminology used, any right to use AS Property
                granted to you represents a limited license right governed
                solely by the terms of this Agreement and available for
                distribution at Appreciate Stuff's sole discretion. You
                acknowledge that you do not own the User Account you use to
                access the Services, nor do you possess any rights of access or
                rights to data stored by or on behalf of Appreciate Stuff on
                Appreciate Stuff servers, including without limitation, any data
                representing or embodying any or all AS Property. You agree that
                Appreciate Stuff has the absolute right to manage, regulate,
                control, modify and/or eliminate AS Property as it sees fit in
                its sole discretion, in any general or specific case, and that
                Appreciate Stuff will have no liability to you based on its
                exercise of such right. All data on Appreciate Stuff's servers
                are subject to deletion, alteration or transfer. NOTWITHSTANDING
                ANY VALUE ATTRIBUTED TO SUCH DATA BY YOU OR ANY THIRD PARTY, YOU
                UNDERSTAND AND AGREE THAT ANY DATA, USER ACCOUNT HISTORY AND
                USER ACCOUNT CONTENT RESIDING ON APPRECIATE STUFF'S SERVERS, MAY
                BE DELETED, ALTERED, MOVED OR TRANSFERRED AT ANY TIME AND FOR
                ANY REASON IN APPRECIATE STUFF'S SOLE DISCRETION, WITH OR
                WITHOUT NOTICE AND WITH NO LIABILITY OF ANY KIND. APPRECIATE
                STUFF DOES NOT PROVIDE OR GUARANTEE, AND EXPRESSLY DISCLAIMS,
                ANY VALUE, CASH OR OTHERWISE, ATTRIBUTED TO ANY DATA RESIDING ON
                APPRECIATE STUFF'S SERVERS.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="digital-assets">
              3. Digital Assets; Purchases
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph bold={true}>
                3.1 Accuracy of Information; Taxes
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                All information that you provide in connection with a purchase
                or transaction or other monetary transaction interaction with
                the Services must be accurate, complete, and current. You will
                pay applicable taxes, if any, relating to any such purchases,
                transactions or other monetary transaction interactions.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                3.2 California Residents
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                he provider of services is Appreciate Stuff, Inc. / 2202 18th
                Street NW #205 Washington, DC 20009 /
                designatedagent@appreciate.it / 202-964-1233. If you are a
                California resident, in accordance with Cal. Civ. Code §1789.3,
                you may report complaints to the Complaint Assistance Unit of
                the Division of Consumer Services of the California Department
                of Consumer Affairs by contacting them in writing at 1625 North
                Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone
                at (800) 952-5210 or (916) 445-1254. Hearing impaired persons
                may call (800) 326-2297 or (916) 928-1227 via TTY device.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="no-professional-advice">
              4. No Professional Advice
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                If the Services include professional information (for example,
                medical, legal, or financial), such information is for
                informational purposes only and should not be construed as
                professional advice. No action should be taken based upon any
                information contained in the Services. You should seek
                independent professional advice from a person who is licensed
                and/or qualified in the applicable area.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You acknowledge that any opinions or recommendations available
                on or through the Services are not necessarily those of
                Appreciate Stuff nor endorsed by Appreciate Stuff. Appreciate
                Stuff does not guarantee or promise that any opinions or
                recommendations available on or through the Services are
                accurate or will be helpful to any issue you may have. ANY
                RELIANCE ON ANY OPINIONS OR RECOMMENDATIONS OFFERED ON OR
                THROUGH THE SERVICES IS DONE AT YOUR OWN RISK. YOU AGREE THAT
                APPRECIATE STUFF IS NOT LIABLE TO YOU OR ANYONE ELSE FOR ANY
                INJURY OR HARM THAT MIGHT RESULT FROM USING OR IMPLEMENTING IN
                ANY MANNER ANY OF THE OPINIONS OR RECOMMENDATIONS FOUND ON OR
                THROUGH THE SERVICES.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="2fa-and-auto-calls">
              5. Two-Factor Authentication and Autodialed Calls / Texts
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                Please note that by creating a User Account and providing your
                phone number, you consent to receive autodialed or prerecorded
                calls and text messages from us at the telephone number(s) you
                provide to us. We may place such calls or texts to: (i) help
                keep your User Account secure through the use of two-factor
                authentication; (ii) help you access your User Account when
                you've forgotten your password; or (iii) as otherwise necessary
                to service your User Account or enforce this Agreement, our
                policies, applicable law, or any other agreement we may have
                with you.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="user-generated-content">
              6. User Generated Content
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                Certain parts of the Services may allow you to upload your own
                user generated content (“UGC”) in certain locations or as part
                of your use of the Services. Any UGC you transmit, post or
                otherwise make available on or through the Services, which
                includes any comments, pieces, ideas or other information or
                materials you make available in any form including, but not
                limited to, any visual or audio data, is made available to
                Appreciate Stuff on a non-proprietary and non-confidential
                basis. You hereby grant to Appreciate Stuff and our designees a
                worldwide, non-exclusive, sublicenseable, assignable,
                royalty-free, perpetual, and irrevocable right (including moral
                rights) and license to use, reproduce, distribute, modify,
                adapt, translate, create derivative works based on, publish,
                perform and/or display your UGC for the purposes of: (i)
                displaying and demonstrating the capabilities and functioning of
                the Services; (ii) marketing the Services, in any media now
                known or hereafter developed; and/or (iii) for any other
                purposes to which you consent, without compensation to you or
                any other provider of UGC. You also agree to permit any other
                user of the Services to access, display, view, store, and
                reproduce such UGC for personal use. This license includes any
                right of publicity rights that may be present in the UGC.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You hereby agree that to the extent you include in your UGC any
                Personal Information, Appreciate Stuff may process and disclose
                such information as necessary to: (i) fulfill Appreciate Stuff's
                obligations under this Agreement; (ii) comply with any
                applicable legal obligations; (iii) avoid any imminent harm to
                you or another person; (iv) carry out tasks in the public
                interest; or (v) pursue other legitimate interests as set forth
                in this Agreement, provided such legitimate interests are not
                overridden by the interests or fundamental rights and freedoms
                of the person whose information is at issue. User Account
                holders shall at all times use the Services in accordance with
                all applicable privacy laws and regulations in order to transfer
                or disclose any Personal Information provided by other users of
                the Services to Appreciate Stuff and its service providers or
                their respective affiliates, subcontractors, agents, successors
                and/or assigns.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Appreciate Stuff reserves the right to comply and cooperate with
                any and all legal requirements, legal or regulatory authorities,
                and/or law enforcement agencies regarding the investigation of,
                or request to disclose, information related to your UGC. You
                waive and hold harmless Appreciate Stuff from any claims
                resulting from any action taken by Appreciate Stuff during or as
                a result of an investigation and/or from any actions taken as a
                consequence of investigations by either Appreciate Stuff or law
                enforcement.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You acknowledge and agree that Appreciate Stuff may refuse,
                alter, edit, delete, or disclose any UGC in whole or in part
                without cause and without notice for any legitimate purpose
                including, but not limited to, to address any UGC that
                Appreciate Stuff determines is inappropriate or disruptive to
                the Services or to any other user of the Services. Appreciate
                Stuff has no obligation or duty to, and does not represent that
                it will, monitor, change, or remove any UGC. Appreciate Stuff
                has no direct control over any UGC, and therefore Appreciate
                Stuff is not liable to you or anyone else for any harm or
                damages you may experience in using and/or relying on any UGC.
                None of the UGC available on or through the Services is
                fact-checked or maintained by Appreciate Stuff.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                You represent and warrant to Appreciate Stuff that any UGC you
                make available on or through the Services is original to you and
                you own all right, title and interest, including the
                intellectual property rights, to such UGC, or you have obtained
                all permissions, releases, rights or licenses from the
                respective owner that are required to grant the rights and
                assignment granted herein without obtaining any further releases
                or consents. You further represent and warrant that you will not
                make any UGC available on or through the Services that infringes
                third-party rights including, but not limited to, any
                intellectual property rights, privacy rights, publicity rights,
                contract rights, or any other rights of any person or entity.
                You shall be solely liable for any damages, royalties, or fees
                resulting from any infringement of rights or any other harm
                resulting from any UGC you make available on or through the
                Services.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The transmitting, posting, or making available of UGC through
                the Services does not indicate any approval or endorsement by
                Appreciate Stuff of such UGC. Appreciate Stuff is not
                responsible for, and hereby disclaims any and all liability that
                may arise from, the UGC or any act of accessing, browsing,
                contributing to, or otherwise using the Services.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="dmca-notice-procedure">
              7. DMCA Notice Procedure
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                The Digital Millennium Copyright Act of 1998 (the “DMCA”)
                provides some recourse for copyright owners who believe that
                material appearing on the Internet infringes their rights under
                U.S. copyright law. If you believe in good faith that materials
                available on or through the Services infringe your copyright,
                you (or your agent) may send Appreciate Stuff a notice
                requesting that the material be removed, or that access to it
                blocked. Notices and counter-notices must meet the then current
                statutory requirements imposed by the DMCA (see
                http://copyright.gov/ for details). Notices and counter-notices
                with respect to the Services should be sent via registered mail
                or email to Appreciate Stuff’s designated agent for notice of
                claims of copyright infringement at:{' '}
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>By Mail</TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                2202 18th Street NW #205 Washington, DC 20009
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Attn: Copyright Agent
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                By Email –{' '}
                <a
                  href="mailto:designatedagent@appreciate.it"
                  className="text-theme-indigo-3 break-all"
                >
                  designatedagent@appreciate.it
                </a>{' '}
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Under the DMCA, notices must include all of the following
                details:
              </TermsPageSectionParagraph>
              <TermsPageSectionList listType="list-none">
                <li>
                  i. An electronic or physical signature of the copyright owner
                  or of a person authorized to act on behalf of the owner of an
                  exclusive right that is allegedly infringed;
                </li>
                <li>
                  ii. Identification of the copyrighted work(s) claimed to have
                  been infringed or, if multiple works at a single online
                  location are covered by a single notice, a representative list
                  of such works at such location;
                </li>
                <li>
                  iii. A description of the material that is claimed to be
                  infringing or to be the subject of infringing activity and
                  that is to be removed or access to which is to be disabled,
                  and information reasonably sufficient to permit Appreciate
                  Stuff to locate the material, such as its URL;
                </li>
                <li>
                  iv. Information reasonably sufficient to permit Appreciate
                  Stuff to contact you as the complaining party, such as an
                  address, telephone number, and, if available, an email address
                  at which the complaining party may be contacted;
                </li>
                <li>
                  v. A statement that the complaining party has a good faith
                  belief that the disputed use is not authorized by the
                  copyright owner, its agent or the law; and
                </li>
                <li>
                  vi. A statement, made under the penalty of perjury, that the
                  information in the notice is accurate, and that the
                  complaining party is the copyright owner or is authorized to
                  act on behalf of the owner of an exclusive right that is
                  allegedly infringed.
                </li>
              </TermsPageSectionList>
              <TermsPageSectionParagraph>
                Appreciate Stuff takes copyright and other intellectual property
                issues seriously, and will terminate access to the Services for
                any User Accounts and/or users that are connected to valid and
                repeat copyright infringement complaints.{' '}
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                If you believe that any UGC available on or through the Services
                violates or infringes your intellectual property rights, other
                than related to copyright, please send a detailed email to{' '}
                <a
                  href="mailto:designatedagent@appreciate.it"
                  className="text-theme-indigo-3 break-all"
                >
                  designatedagent@appreciate.it
                </a>{' '}
                detailing your allegation and please specify “Copyright Agent”
                in the subject line of the email. Appreciate Stuff takes
                infringement of intellectual property rights seriously and will
                investigate the matter.{' '}
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="acceptable-use-policy">
              8. Acceptable Use Policy
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                In connection with your access to and/or use of the Services,
                you agree that you will NOT transmit, post or otherwise make
                available through use of the Services any UGC or data that:
              </TermsPageSectionParagraph>
              <TermsPageSectionList listType="list-none">
                <li>
                  i. Violates this Agreement, including, without limitation, the
                  Appreciate Stuff Privacy Policy or any applicable laws, rules,
                  or regulations;
                </li>
                <li>
                  ii. Is unlawful, harassing, bullying, abusive, tortious,
                  threatening, harmful, hateful, libelous, defamatory, obscene,
                  offensive, vulgar, false, intentionally misleading, trade
                  libelous, pornographic, sexually explicit, obscene, patently
                  offensive, is invasive of another's privacy, or is otherwise
                  objectionable;
                </li>
                <li>
                  iii. Intentionally discriminates against or harasses
                  particular individuals or groups, promotes or depicts racism,
                  bigotry, hatred, violence or physical harm of any kind towards
                  any group or individual;
                </li>
                <li>
                  iv. Incites, promotes, or engages in any planning or advocacy
                  for violence, rioting, illegal activities or contributes to
                  the creation of weapons, illegal materials, or otherwise is
                  violent in nature, illegal, or would give rise to criminal or
                  civil liability in any way;
                </li>
                <li>
                  v. Includes the Personal Information or other non-public data
                  of any other person without such person's express consent;
                </li>
                <li>
                  vi. Constitutes protected health information subject to the
                  Health Insurance Portability and Accountability Act (HIPAA) or
                  any regulation, rule, or standards issued thereunder, or
                  similarly protected sensitive Personal Information under any
                  applicable state law, rule, or regulation;
                </li>
                <li>
                  vii. Infringes any third party's intellectual property rights
                  or other third-party rights;
                </li>
                <li>
                  viii. Provides any false, deceptive, fraudulent, or misleading
                  information or content to Appreciate Stuff, other users of the
                  Services, or any other third party through your use of the
                  Services;
                </li>
                <li>
                  ix. Impersonates any person or entity, misrepresents yourself
                  or falsely states or otherwise misrepresents your affiliation
                  with any person or entity; or
                </li>
                <li>
                  x. Implies Appreciate Stuff endorses any of your statements or
                  positions.
                </li>
              </TermsPageSectionList>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="security">
              9. Security
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                Appreciate Stuff cares about the integrity and security of your
                Personal Information and other data. However, we cannot
                guarantee that all information transmitted online will be secure
                or that unauthorized third parties will never be able to defeat
                our security measures or use your Personal Information or other
                data for improper purposes. You acknowledge that you provide
                your Personal Information and any other data at your own risk.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="3rd-party-links">
              10. Third-Party Links and Information
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                The Services may contain links to third-party materials that are
                not owned or controlled by Appreciate Stuff (“External Links”).
                Appreciate Stuff does not endorse or assume any responsibility
                for any third-party sites, information, materials, products, or
                services available through such External Links. If you access or
                use one of the External Links or share content available on or
                through any External Links, you do so at your own risk, and you
                understand that this Agreement and Appreciate Stuff's Privacy
                Policy do not apply to your use of such External Links. You
                expressly relieve Appreciate Stuff from any and all liability
                arising from your use of any External Links, including without
                limitation, content submitted by other users of those External
                Links. Additionally, your dealings with or participation in
                promotions of advertisers found on the Services, including
                payment and delivery of goods, and any other terms (such as
                warranties) are solely between you and such advertisers. You
                agree that Appreciate Stuff shall not be responsible for any
                loss or damage of any sort relating to your dealings with such
                advertisers.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Appreciate Stuff may also allow for integration and other
                interactions between the Services and other third-party social
                media platforms. This may include integration with third-party
                buttons or plugins available on or through the Services that
                when used, may allow you to share content from our Services or
                other content with other persons on or through the third-party
                social media platforms or elsewhere. Please consult the privacy
                policies of these third-party services before using them to make
                sure you are comfortable with the respective level of sharing.
                Appreciate Stuff has no control over these third-party social
                media platforms and you use these interaction functions at your
                own risk. Appreciate Stuff is in no way liable for any harm to
                you as a result of using one of these social media interaction
                functions.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="indemnity">
              11. Indemnity
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                You agree to defend, indemnify and hold harmless Appreciate
                Stuff and its subsidiaries, agents, licensors, managers, and
                other affiliated companies, and their respective employees,
                contractors, agents, business partners, representatives,
                attorneys, officers, directors, and any other party involved in
                the creation, production or transmission of the Services
                (collectively, the “Indemnified Parties”) from and against any
                and all claims, damages, obligations, losses, liabilities, costs
                or debt, and expenses, including without limitation, reasonable
                legal and accounting fees, costs of defense and direct,
                indirect, punitive, special, individual, consequential, or
                exemplary damages the Indemnified Parties suffer in relation to
                or resulting from, or for the purpose of avoiding, any
                third-party claim or demand that relates to: (i) your use of and
                access to the Services, including any data or content
                transmitted or received by you; (ii) your violation of any term
                of this Agreement, including without limitation your breach of
                any of the representations and warranties above; (iii) your
                violation of any third-party right, including without limitation
                any right of privacy or intellectual property rights; (iv) your
                violation of any applicable law, rule or regulation; (v) any
                content that is submitted via your User Account including
                without limitation misleading, false, or inaccurate information;
                (vi) your willful misconduct; or (vii) any other party's access
                to and use of the Services through your User Account.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Appreciate Stuff shall provide notice to you of any such
                indemnification claim, suit, or proceeding. Appreciate Stuff
                reserves the right to assume the exclusive defense and control
                of any matter which is subject to indemnification under this
                Section 11. In such case, you agree to cooperate with any
                reasonable requests in assisting Appreciate Stuff's defense of
                such matter. Your indemnification obligations shall survive the
                termination of this Agreement.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="no-warranty">
              12. No Warranty
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                AVAILABLE” BASIS. ALL USE OF THE SERVICES IS DONE AT YOUR OWN
                RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE
                SERVICES ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER
                EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                APPROPRIATENESS, TIMELINESS, OR NON-INFRINGEMENT. NO ADVICE OR
                INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM
                APPRECIATE STUFF OR THROUGH THE SERVICES WILL CREATE ANY
                WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE
                GENERALITY OF THE FOREGOING, APPRECIATE STUFF AND THE OTHER
                INDEMNIFIED PARTIES EXPRESSLY DISCLAIM ANY WARRANTY THAT: (I)
                THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; (II) THAT THE
                SERVICES WILL MEET YOUR REQUIREMENTS; (III) THAT THE SERVICES
                WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION,
                UNINTERRUPTED OR SECURE; (IV) THAT ANY DEFECTS OR ERRORS WILL BE
                CORRECTED; (V) OR THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER
                HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED
                THROUGH THE USE OF THE SERVICES IS DOWNLOADED AT YOUR OWN RISK
                AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR
                COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA THAT RESULTS
                FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICES.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                TO THE EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED ON AN
                “AS IS” AND “AS FURTHER, THE INDEMNIFIED PARTIES DO NOT WARRANT,
                ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
                SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
                APPRECIATE STUFF SERVICES OR ANY EXTERNAL LINKS, AND APPRECIATE
                STUFF WILL NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY
                TRANSACTION BETWEEN YOU AND ANY THIRD PARTY.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                CERTAIN JURISDICTIONS MAY NOT ALLOW THE EXCLUSION AND
                LIMITATIONS OF CERTAIN IMPLIED WARRANTIES, SO THE ABOVE
                EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU
                SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH
                VARY FROM STATE TO STATE. THE DISCLAIMERS AND EXCLUSIONS UNDER
                THIS AGREEMENT WILL APPLY TO THE GREATEST EXTENT PERMITTED BY
                APPLICABLE LAW.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="limitation">
              13. Limitation of Liability
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL THE INDEMNIFIED PARTIES BE LIABLE TO YOU OR ANY OTHER USER
                FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
                OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION, DAMAGES FOR
                BUSINESS INTERRUPTION, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
                OR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE
                LOSSES, ARISING OUT OF OR RELATING TO: (I) THIS AGREEMENT; (II)
                THE USE OR INABILITY TO USE THE SERVICES; (III) ANY TRANSACTION
                CONDUCTED THROUGH OR FACILITATED BY THE SERVICES; (IV) ANY CLAIM
                ATTRIBUTABLE TO ERRORS, OMISSIONS, OR INACCURACIES AVAILABLE ON
                OR THROUGH THE SERVICES; OR (V) ANY OTHER MATTER RELATING TO THE
                SERVICES AND/OR ANY EXTERNAL LINKS AVAILABLE ON OR THROUGH THE
                SERVICES. UNDER NO CIRCUMSTANCES WILL APPRECIATE STUFF OR ANY OF
                THE OTHER INDEMNIFIED PARTIES BE RESPONSIBLE FOR ANY DAMAGE,
                LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER
                UNAUTHORIZED ACCESS OR USE OF THE SERVICES OR YOUR USER ACCOUNT
                OR THE INFORMATION CONTAINED THEREIN.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, APPRECIATE
                STUFF AND THE OTHER INDEMNIFIED PARTIES ASSUME NO LIABILITY OR
                RESPONSIBILITY FOR ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF
                CONTENT; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR
                SERVICES; (III) UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE
                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN;
                (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM
                THE SERVICES; (V) BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT
                MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD
                PARTY; (VI) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS
                OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE
                SERVICES; AND/OR (VII) DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT
                OF ANY THIRD PARTY. IN NO EVENT SHALL THE INDEMNIFIED PARTIES BE
                LIABLE TO YOU FOR ANY CLAIMS, PROCEEDINGS, LIABILITIES,
                OBLIGATIONS, DAMAGES, LOSSES OR COSTS IN AN AMOUNT EXCEEDING THE
                AMOUNT YOU PAID TO APPRECIATE STUFF IN THE TWELVE (12) MONTHS
                PRECEDING THE EVENT THAT CAUSED THE APPLICABLE CLAIM OR $50.00,
                WHICHEVER IS GREATER.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                THIS LIMITATION OF LIABILITY SECTION APPLIES WHETHER THE ALLEGED
                LIABILITY IS BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
                LIABILITY, OR ANY OTHER BASIS, EVEN IF APPRECIATE STUFF HAS BEEN
                ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS OR
                EXCLUSIONS MAY NOT APPLY TO YOU. THIS AGREEMENT GIVES YOU
                SPECIFIC LEGAL RIGHTS, AND YOU MAY ALSO HAVE OTHER RIGHTS WHICH
                VARY DEPENDING ON THE JURISDICTION. THE DISCLAIMERS, EXCLUSIONS,
                AND LIMITATIONS OF LIABILITY UNDER THIS AGREEMENT WILL APPLY TO
                THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                THE PARTIES AGREE THAT THE LIMITATIONS OF LIABILITY SET FORTH IN
                THIS SECTION ARE A FUNDAMENTAL BASIS OF THE BARGAIN, THAT
                APPRECIATE STUFF PROVIDES ITS SERVICES IN RELIANCE ON THE
                ENFORCEABILITY OF THESE PROVISIONS, AND THAT SUCH PROVISIONS
                SHALL APPLY NOTWITHSTANDING THAT ANY REMEDY SHALL FAIL ITS
                ESSENTIAL PURPOSE.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                IF YOU ARE DISSATISFIED WITH APPRECIATE STUFF'S SERVICES OR THE
                TERMS OF THIS AGREEMENT, YOUR SOLE AND EXCLUSIVE REMEDY IS TO
                DISCONTINUE USING THE SERVICES.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="governing-law">
              14. Governing Law, Arbitration, and Class Action/Jury Trial Waiver
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph bold={true}>
                14.1 Governing Law
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                YOU HEREBY CONSENT AND AGREE that: (i) the Services shall be
                deemed solely based in Delaware; and (ii) the Services shall be
                deemed passive and shall not give rise to personal jurisdiction
                between the parties, either specific or general, in
                jurisdictions other than Delaware. YOU HEREBY CONSENT AND AGREE
                that this Agreement shall be governed by the internal
                substantive laws of the State of Delaware, without respect to
                its conflict of laws principles. The parties acknowledge that
                this Agreement evidences a transaction involving interstate
                commerce. Notwithstanding the preceding sentences with respect
                to the substantive law, the Federal Arbitration Act (9 U.S.C. §§
                1-16) (“FAA”) governs the interpretation and enforcement of the
                Arbitration Agreement in Section 14.2 and preempts all state
                laws to the fullest extent permitted by law. If the FAA is found
                to not apply to any issue that arises from or relates to the
                Arbitration Agreement, then that issue shall be resolved under
                and governed by the law of your state of residence. The
                application of the United Nations Convention on Contracts for
                the International Sale of Goods is expressly excluded. YOU
                HEREBY CONSENT AND AGREE to submit to the exclusive personal
                jurisdiction of the federal and state courts located in Delaware
                for any actions for which we retain the right to seek injunctive
                or other equitable relief in a court of competent jurisdiction
                to prevent the actual or threatened infringement,
                misappropriation or violation of our copyrights, trademarks,
                trade secrets, patents, or other intellectual property rights,
                as set forth in the Arbitration provision below, including any
                provisional relief required to prevent irreparable harm. YOU
                HEREBY CONSENT AND AGREE that Delaware is the proper and
                exclusive forum for any appeals of an arbitration award or for
                trial court proceedings in the event that the arbitration
                provision below is found to be unenforceable.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                14.2 Arbitration.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES THE PARTIES TO
                ARBITRATE THEIR DISPUTES AND LIMITS THE MANNER IN WHICH YOU CAN
                SEEK RELIEF FROM APPRECIATE STUFF. This Section (the
                “Arbitration Agreement”) applies to and governs any dispute,
                controversy, or claim between you and Appreciate Stuff that
                arises out of or relates to, directly or indirectly: (i) this
                Agreement, including the formation, existence, breach,
                termination, enforcement, interpretation, validity, or
                enforceability thereof; (ii) access to or use of the Services,
                including receipt of any advertising or marketing
                communications; (iii) any transactions through, by, or using the
                Services; or (iv) any other aspect of your relationship or
                transactions with Appreciate Stuff, directly or indirectly, as a
                consumer (“Claim” or collectively, “Claims”). The Arbitration
                Agreement shall apply, without limitation, to all Claims that
                arose or were asserted before or after your commitment to be
                bound by the terms of this Agreement.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                If you are a new Appreciate Stuff User Account holder, you can
                reject and opt-out of this Arbitration Agreement within thirty
                (30) days of accepting this Agreement by emailing Appreciate
                Stuff at designatedagent@appreciate.it with your first and last
                name and stating your intent to opt-out of the Arbitration
                Agreement. Note that opting out of this Arbitration Agreement
                does not affect any other part of this Agreement, including the
                provisions regarding controlling law or in which courts any
                disputes must be brought.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                For any Claim, you agree to first contact us at
                designatedagent@appreciate.it and attempt to resolve the dispute
                with us informally. In the unlikely event that Appreciate Stuff
                has not been able to resolve a Claim after sixty (60) days, we
                each agree to resolve any Claim exclusively through binding
                arbitration administered by the American Arbitration Association
                (“AAA”) before a single arbitrator (the “Arbitrator”), under the
                Expedited Procedures then in effect for the AAA (the “Rules”),
                except as provided herein. In the event of any conflict between
                the Rules and this Arbitration Agreement, this Arbitration
                Agreement shall control. AAA may be contacted at www.adr.org,
                where the Rules are also available. The arbitration will be
                conducted in the U.S. county where you live or Delaware, unless
                you and Appreciate Stuff agree otherwise. If you are using the
                Services for commercial purposes, each party will be responsible
                for paying any AAA filing, administrative and arbitrator fees in
                accordance with AAA rules, and the award rendered by the
                arbitrator shall include costs of arbitration, reasonable
                attorneys' fees and reasonable costs for expert and other
                witnesses. If you are an individual using the Services for
                non-commercial purposes: (i) AAA may require you to pay a fee
                for the initiation of your case, unless you apply for and
                successfully obtain a fee waiver from AAA; (ii) the award
                rendered by the arbitrator may include your costs of
                arbitration, your reasonable attorney's fees, and your
                reasonable costs for expert and other witnesses; and (iii) you
                may sue in a small claims court of competent jurisdiction
                without first engaging in arbitration, but this does not absolve
                you of your commitment to engage in the informal dispute
                resolution process. Any judgment on the award rendered by the
                arbitrator may be entered in any court of competent
                jurisdiction. You and Appreciate Stuff agree that the
                Arbitrator, and not any federal, state, or local court or
                agency, shall have exclusive authority to resolve any disputes
                relating to the interpretation, applicability, enforceability or
                formation of this Arbitration Agreement, including any claim
                that all or any part of this Arbitration Agreement is void or
                voidable. The Arbitrator shall also be responsible for
                determining all threshold arbitrability issues, including issues
                relating to whether the Agreement, any provision of the
                Agreement, is unconscionable or illusory and any defense to
                arbitration, including waiver, delay, laches, unconscionability,
                or estoppel.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Nothing in this Section shall be deemed as: preventing
                Appreciate Stuff from seeking injunctive or other equitable
                relief from the courts as necessary to prevent the actual or
                threatened infringement, misappropriation, or violation of our
                data security, intellectual property rights or other proprietary
                rights; or preventing you from asserting claims in small claims
                court, if your claims qualify and so long as the matter remains
                in such court and advances on only an individual (non-class,
                non-representative) basis.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                If this Arbitration Agreement is found to be void,
                unenforceable, or unlawful, in whole or in part, the void,
                unenforceable, or unlawful provision, in whole or in part, shall
                be severed. Severance of the void, unenforceable, or unlawful
                provision, in whole or in part, shall have no impact on the
                remaining provisions of the Arbitration Agreement, which shall
                remain in force, or the parties' ability to compel arbitration
                of any remaining claims on an individual basis pursuant to the
                Arbitration Agreement. Notwithstanding the foregoing, if the
                Class Action/Jury Trial Waiver is found to be void,
                unenforceable, or unlawful, in whole or in part, because it
                would prevent you from seeking public injunctive relief, then
                any dispute regarding the entitlement to such relief (and only
                that relief) must be severed from arbitration and may be
                litigated in a civil court of competent jurisdiction. All other
                claims for relief subject to arbitration under this Arbitration
                Agreement shall be arbitrated under its terms, and the parties
                agree that litigation of any dispute regarding the entitlement
                to public injunctive relief shall be stayed pending the outcome
                of any individual claims in arbitration.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                14.3 Class Action/Jury Trial Waiver.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER
                THEY HAVE OBTAINED OR USED THE SERVICES FOR PERSONAL, COMMERCIAL
                OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES'
                INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN
                ANY PURPORTED CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY
                GENERAL ACTION OR OTHER REPRESENTATIVE PROCEEDING. THIS WAIVER
                APPLIES TO CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE,
                THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S
                CLAIMS. YOU AND APPRECIATE STUFF AGREE THAT THE ARBITRATOR MAY
                AWARD RELIEF ONLY TO AN INDIVIDUAL CLAIMANT AND ONLY TO THE
                EXTENT NECESSARY TO PROVIDE RELIEF ON YOUR INDIVIDUAL CLAIM(S).
                ANY RELIEF AWARDED MAY NOT AFFECT OTHER APPRECIATE STUFF USERS.
                YOU AND APPRECIATE STUFF FURTHER AGREE THAT, BY ENTERING INTO
                THIS AGREEMENT, YOU AND APPRECIATE STUFF ARE EACH WAIVING THE
                RIGHT TO A TRIAL BY JURY OR TO BRING, JOIN, OR PARTICIPATE IN A
                CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL
                ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND AS A
                PLAINTIFF OR CLASS MEMBER.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="additional-terms">
              15. Additional Terms for the App(s)
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph bold={true}>
                15.1 App(s)
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                As mentioned, we may make available software to access the
                Services via one or more App(s) on your mobile device. To use
                the App(s), you must have a compatible mobile device. You should
                check the minimum requirements and specifications (including
                memory space and operating system) as set out in the App details
                on the applicable store page before downloading our App(s).
                Appreciate Stuff does not warrant that the App(s) will be
                compatible with your mobile device. You acknowledge and agree
                that the system requirements for the App(s), which may be
                changed from time to time, are your responsibility. We accept no
                responsibility for any lack of functionality that is due to your
                equipment (including your device, internet connection, operating
                system or settings and software). Access to parts or all of the
                App(s) and any or all content on the App(s) may be restricted
                from time to time to allow for repairs, maintenance or updating.
                You may use mobile data in connection with the App(s) and may
                incur additional charges from your wireless provider for these
                services. You agree that you are solely responsible for any such
                charges. Appreciate Stuff hereby grants you a non-exclusive,
                non-transferable, revocable license to use the App(s) for one
                User Account on one mobile device owned or leased solely by you,
                for your personal use. You may not: (i) modify, disassemble,
                decompile or reverse engineer the App(s), except to the extent
                that such restriction is expressly prohibited by law; (ii) rent,
                lease, loan, resell, sublicense, distribute or otherwise
                transfer the App(s) to any third party or use the App(s) to
                provide time sharing or similar services for any third party;
                (iii) make any copies of the App(s); (iv) remove, circumvent,
                disable, damage or otherwise interfere with security-related
                features of the App(s), features that prevent or restrict use or
                copying of any content accessible through the App(s), or
                features that enforce limitations on use of the App(s); or (v)
                delete the copyright and other proprietary rights notices on the
                App(s). You acknowledge that Appreciate Stuff may from time to
                time issue upgraded versions of the App(s), and may
                automatically electronically upgrade the version of the App(s)
                that you are using on your mobile device. You consent to such
                automatic upgrading on your mobile device, and agree that the
                terms and conditions of this Agreement will apply to all such
                upgrades. Any third-party code that may be incorporated in the
                App(s) is covered by the applicable open source or third-party
                licenses EULAs, if any, authorizing use of such code. The
                foregoing license grant is not a sale of the App(s) or any copy
                thereof, and Appreciate Stuff or its third-party partners or
                suppliers retain all right, title, and interest in the App(s)
                (and any copy thereof). Any attempt by you to transfer any of
                the rights, duties or obligations hereunder, except as expressly
                provided for in this Agreement, is void. Appreciate Stuff
                reserves all rights not expressly granted under this Agreement.
                If the App(s) is/are being acquired on behalf of the United
                States Government, then the following provision applies. The
                App(s) will be deemed to be “commercial computer software” and
                “commercial computer software documentation,” respectively,
                pursuant to DFAR Section 227.7202 and FAR Section 12.212, as
                applicable. Any use, reproduction, release, performance, display
                or disclosure of the Services and any accompanying documentation
                by the U.S. Government will be governed solely by this Agreement
                and is prohibited except to the extent expressly permitted by
                this Agreement. The software for the App(s) originates in the
                United States, and is subject to United States export laws and
                regulations. The App(s) may not be exported or re-exported to
                certain countries or those persons or entities prohibited from
                receiving exports from the United States. In addition, the
                App(s) may be subject to the import and export laws of other
                countries. You agree to comply with all United States and
                foreign laws related to use of the App(s) and the Services. To
                download the App(s), you will need a valid account for the
                online store where the App(s) is/are available (as applicable to
                your device).
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                15.2 Mobile Applications from Apple App Store
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The following applies to any App(s) you acquire from the Apple
                App Store (“Apple-Sourced Software”): You acknowledge and agree
                that this Agreement is solely between you and Appreciate Stuff,
                not Apple, Inc. (“Apple”) and that Apple has no responsibility
                for the Apple-Sourced Software or content thereof. Your use of
                the Apple-Sourced Software must comply with the App Store Terms
                of Service. You acknowledge that Apple has no obligation
                whatsoever to furnish any maintenance and support services with
                respect to the Apple-Sourced Software. In the event of any
                failure of the Apple-Sourced Software to conform to any
                applicable warranty, you may notify Apple, and Apple will refund
                the purchase price for the Apple-Sourced Software to you. To the
                maximum extent permitted by applicable law, Apple will have no
                other warranty obligation whatsoever with respect to the
                Apple-Sourced Software, and any other claims, losses,
                liabilities, damages, costs or expenses attributable to any
                failure to conform to any warranty will be solely governed by
                this Agreement and any law applicable to Appreciate Stuff as
                provider of the software. You acknowledge that Apple is not
                responsible for addressing any claims of you or any third party
                relating to the Apple-Sourced Software or your possession and/or
                use of the Apple-Sourced Software, including, but not limited
                to: (i) product liability claims; (ii) any claim that the
                Apple-Sourced Software fails to conform to any applicable legal
                or regulatory requirement; and (iii) claims arising under
                consumer protection or similar legislation; and all such claims
                are governed solely by this Agreement and any law applicable to
                Appreciate Stuff as provider of the software. You acknowledge
                that, in the event of any third-party claim that the
                Apple-Sourced Software or your possession and use of that
                Apple-Sourced Software infringes that third party's Intellectual
                Property Rights, Appreciate Stuff, not Apple, will be solely
                responsible for the investigation, defense, settlement and
                discharge of any such intellectual property infringement claim
                to the extent required by this Agreement. You and Appreciate
                Stuff acknowledge and agree that Apple, and Apple's
                subsidiaries, are third-party beneficiaries of this Agreement as
                relates to your license of the Apple-Sourced Software, and that,
                upon your acceptance of the terms and conditions of this
                Agreement, Apple will have the right (and will be deemed to have
                accepted the right) to enforce this Agreement as relates to your
                license of the Apple-Sourced Software against you as a
                third-party beneficiary thereof.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                15.3 Mobile Applications from Google Play Store
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The following applies to any App(s) you acquire from the Google
                Play Store (“Google-Sourced Software”): (i) you acknowledge that
                the Agreement is between you and Appreciate Stuff only, and not
                with Google, Inc. (“Google”); (ii) your use of Google-Sourced
                Software must comply with Google's then-current Google Play
                Store Terms of Service; (iii) Google is only a provider of the
                Google Play Store where you obtained the Google-Sourced
                Software; (iv) Appreciate Stuff, and not Google, is solely
                responsible for its Google-Sourced Software; (v) Google has no
                obligation or liability to you with respect to Google-Sourced
                Software or the Agreement; and (vi) you acknowledge and agree
                that Google is a third-party beneficiary to the Agreement as it
                relates to Appreciate Stuff's Google-Sourced Software.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionTitle id="general">
              16. General
            </TermsPageSectionTitle>
            <TermsPageSectionContent>
              <TermsPageSectionParagraph bold={true}>
                16.1 Assignment.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                This Agreement, and any rights and licenses granted hereunder,
                may not be transferred or assigned by you, but may be assigned
                by Appreciate Stuff without restriction. Any attempted transfer
                or assignment in violation hereof shall be null and void.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                16.2 Notification Procedures.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Appreciate Stuff may provide notifications, whether such
                notifications are required by law or are for marketing or other
                business related purposes, to you via email notice, written or
                hard copy notice, or through posting of such notice on our
                website, as determined by Appreciate Stuff in our sole
                discretion. Appreciate Stuff reserves the right to determine the
                form and means of providing notifications to our users, provided
                that you may opt out of certain means of notification as
                described in this Agreement. Appreciate Stuff is not responsible
                for any automatic filtering you or your network provider may
                apply to email notifications we send to the email address you
                provide us.{' '}
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                16.3 Entire Agreement/Severability.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                This Agreement, together with any amendments and any additional
                agreements you may enter into with Appreciate Stuff in
                connection with the Services, shall constitute the entire
                agreement between you and Appreciate Stuff concerning the
                Services. Except as otherwise stated in this Agreement, if any
                provision of this Agreement is deemed invalid by a court of
                competent jurisdiction, the invalidity of such provision shall
                not affect the validity of the remaining provisions of this
                Agreement, which shall remain in full force and effect.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                16.4 Survival.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                The proprietary rights, disclaimer of warranties,
                representations made by you, indemnities, limitations of
                liability, and any other relevant language that is meant to
                remain in effect after this Agreement ends shall survive the
                termination or expiration of this Agreement.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                16.5 No Waiver.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                No waiver of any term of this Agreement shall be deemed a
                further or continuing waiver of such term or any other term, and
                Appreciate Stuff's failure to assert any right or provision
                under this Agreement shall not constitute a waiver of such right
                or provision.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
            <TermsPageSectionContent paddingtop={false}>
              <TermsPageSectionParagraph bold={true}>
                16.6 Contact.
              </TermsPageSectionParagraph>
              <TermsPageSectionParagraph>
                Please contact us at{' '}
                <a
                  href="mailto:designatedagent@appreciate.it"
                  className="text-theme-indigo-3 break-all"
                >
                  designatedagent@appreciate.it
                </a>{' '}
                with any questions regarding this Agreement.
              </TermsPageSectionParagraph>
            </TermsPageSectionContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
