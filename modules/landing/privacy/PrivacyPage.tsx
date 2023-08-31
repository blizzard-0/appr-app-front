import React from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import {
  StyledPrivacyHeroSectionWrapper,
  StyledPrivacyHeroTitleWrapper,
  StyledPrivacySectionTitleWrapper,
} from './Privacy.styled';

const PrivacyPageSectionTitle: React.FC<{
  id: string;
  children?: React.ReactNode;
}> = ({ children, id }) => {
  return (
    <>
      <a className="block relative invisible -top-16" id={id}></a>
      <div className="py-4 lg:py-8">
        <StyledPrivacySectionTitleWrapper className="">
          {children}
        </StyledPrivacySectionTitleWrapper>
      </div>
      <div className="w-full h-0 border-b border-panda-dark"></div>
    </>
  );
};

const PrivacyPageSectionContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="pb-11 pt-5 lg:pt-12 lg:pb-20">{children}</div>;
};

const PrivacyPageSectionParagraph: React.FC<{
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

const PrivacyPageSectionList: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <ul className="list-disc pl-4 mb-5 lg:mb-6 lg:ml-10">{children}</ul>;
};

export const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-light-gray text-panda-dark">
      <Header />
      <div className="">
        <StyledPrivacyHeroSectionWrapper>
          <h3 className="font-maison-neue-book uppercase text-xl lg:text-2xl text-center pb-8 lg:pb-10 tracking-widest">
            Appreciate Stuff, Inc.
          </h3>
          <StyledPrivacyHeroTitleWrapper>
            Privacy Policy
          </StyledPrivacyHeroTitleWrapper>
        </StyledPrivacyHeroSectionWrapper>
        <div className="w-full mx-auto lg:max-w-1280-px mx-auto px-5 lg:px-10 pt-2 pb-20 lg:pb-44 text-panda-dark maison-neue-book text-base lg:text-2xl lg:leading-9">
          <div>
            <PrivacyPageSectionParagraph>
              Appreciate Stuff, Inc. (“Appreciate Stuff,” “we,” “us,” or “our”)
              owns and operates the www.appreciatestuff.com website and any
              other website where this privacy policy is posted (the “Site(s)”),
              and the Appreciate online and/or mobile application(s) (the
              “App(s)”). This privacy policy (“Policy”) contains details about
              how Appreciate Stuff collects and handles your information when
              you use the Site(s), App(s) and software provided on or in
              connection with the “Flex” digital token concierge and storage
              service or when you otherwise interact with Appreciate Stuff
              (collectively with the Site(s) and App(s), the “Services”).
            </PrivacyPageSectionParagraph>
            <PrivacyPageSectionParagraph>
              This Policy only applies to information we collect from you
              through the Services identified above. Other websites, mobile
              applications, and online services, including any third-party
              services you use to interact with Appreciate Stuff, may have their
              own privacy policies and you should consult those policies
              accordingly.
            </PrivacyPageSectionParagraph>
            <PrivacyPageSectionParagraph>
              The Services are intended for users 18 years of age or older. If
              you are not 18 years of age or older, you are not permitted to
              access or use the Services.
            </PrivacyPageSectionParagraph>
            <PrivacyPageSectionParagraph>
              This Policy is effective as of: October 16, 2021.
            </PrivacyPageSectionParagraph>
          </div>
          <div className="mt-12 mb-11 lg:mb-20">
            <h4 className="font-semibold uppercase text-base lg:text-2xl lg:leading-9 mb-6 font-maison-neue-medium">
              Table of Contents
            </h4>
            <ul className="font-bold text-base font-maison-neue-book text-base lg:text-2xl lg:leading-9">
              <li className="mb-2">
                <a href="#policy-changes">1. Policy Changes</a>
              </li>
              <li className="mb-2">
                <a href="#collection-and-use-of-information">
                  2. Collection and Use of Information
                </a>
              </li>
              <li className="mb-2">
                <a href="#sharing-information">3. Sharing Information</a>
              </li>
              <li className="mb-2">
                <a href="#rights-and-choices">4. Your Rights and Choices</a>
              </li>
              <li className="mb-2">
                <a href="#data-security-and-retention">
                  5. Data Security and Retention
                </a>
              </li>
              <li className="mb-2">
                <a href="#children-information">6. Children{`'`} Information</a>
              </li>
              <li className="mb-2">
                <a href="#appreciate-app">7. The appreciate App</a>
              </li>
              <li className="mb-2">
                <a href="#non-us-concerns">8. Non-U.S. Concerns</a>
              </li>
              <li className="mb-2">
                <a href="#external-link">
                  9. External Links and Third-Party Interactivity
                </a>
              </li>
              <li>
                <a href="#contact-info">10. Contact Information</a>
              </li>
            </ul>
          </div>
          <div>
            <PrivacyPageSectionTitle id="policy-changes">
              1. Policy Change
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff reserves the right to change this Policy at any
                time. Since this Policy may change as we modify or expand our
                Services, we suggest you check back from time to time in order
                to understand how we handle your information. Our Policy’s
                effective date will always be set forth at the beginning and end
                of the Policy. Any changes will be immediately incorporated into
                this Policy, and will be prospective only. We will not make any
                changes that have retroactive effect unless legally required to
                do so.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Any change to this Policy is effective immediately. Your
                continued use of the Services after any changes are made to this
                Policy constitutes your acceptance of the changes. If any
                changes are unacceptable to you, you should cease all use of the
                Services.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                If any changes to this Policy materially affect how Appreciate
                Stuff treats or handles personally identifiable information that
                you have already provided to Appreciate Stuff or that has
                otherwise been collected by Appreciate Stuff, we will endeavor
                to provide you with notice in advance of such change(s) by
                highlighting the change on our Site(s). We will seek your prior
                consent to any material changes, if and where this is required
                by applicable data protection laws. If you do not opt-in, your
                information will continue to be used in a manner that is
                consistent with the version of this Policy under which it was
                collected, or the information will be deleted.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="collection-and-use-of-information">
              2. Collection and Use of Information
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Personal information (“Personal Information”) is generally
                defined as information that, by itself or in combination with
                other information, is reasonably capable of being linked to a
                specific individual or household. Personal Information can
                include, but is not limited to, name, address, telephone number,
                email address, username and password, age/birthdate,
                credit/debit card number or other payment information,
                photograph, office address and other business information,
                biometric data (e.g., fingerprints), state and/or federal
                identification numbers (e.g., driver’s license number; social
                security number; passport number), or any other type of data
                that, directly or indirectly, is reasonably capable of being
                associated with someone.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Depending on how you interact with Appreciate Stuff, there are
                areas of the Services where you may be asked to provide
                Appreciate Stuff with Personal Information or other data, or
                such data may be collected from you in an automated manner. For
                example, Personal Information such as your name, email address,
                username and password or other account access information,
                photographs, and any other Personal Information or other data
                you voluntarily provide through the Services may be collected
                from you when you:
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionList>
                <li>set up a user profile or account for the Services;</li>
                <li>
                  upload, post, publish, share, or otherwise make content
                  available through the Services that includes your Personal
                  Information or other data;
                </li>
                <li>
                  contact Appreciate Stuff with questions, comments, or other
                  messages;
                </li>
                <li>
                  sign up to receive communications about Appreciate Stuff’s
                  Services; or
                </li>
                <li>
                  otherwise provide any information to us voluntarily through
                  the Services.
                </li>
              </PrivacyPageSectionList>
              <PrivacyPageSectionParagraph>
                If you use your mobile device to upload or submit a photo
                through the Services, you may be asked to allow Appreciate Stuff
                to access the rest of the photo gallery on your device.
                Appreciate Stuff also may ask for access to the contact list on
                your device so that your friends can be invited to use the
                Services.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff generally will not ask you to provide any
                sensitive data, such as your sexual orientation, citizenship
                status, religious beliefs, or your race or ethnicity, but you
                may be able to voluntarily provide such sensitive data in
                content that you upload or post on or through the Services. To
                the extent you include any sensitive data in content you
                voluntarily make available through the Services, you hereby
                acknowledge and agree that such data may be processed by
                Appreciate Stuff as necessary to provide the Services in
                accordance with your instructions.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Depending on the nature of the activity, such as if you publicly
                upload or post content through the Services, and such content
                includes your name, likeness or other Personal Information,
                other users of the Services may be able to view such Personal
                Information. The Services include certain features that allow
                you to “love” or “covet” certain products or items, and
                Appreciate Stuff may collect data about your interests based on
                your interactions with these features. Data collected about your
                interests through such interactivity features generally will not
                be shared with third parties, but you may be able to “share”
                your interests in certain products or items with others using
                the Services’ social media functionality and if you do, such
                shared content will be publicly available.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Since you and other users can upload, post, or otherwise
                generate your own content on or through the Services, Appreciate
                Stuff may use any Personal Information included in such
                user-generated content as necessary to: fulfill Appreciate
                Stuff’s contractual obligations; comply with any applicable
                legal requirements; avoid any imminent harm to you or another
                person; carry out tasks in the public interest; or pursue other
                legitimate interests as set forth in this Policy, provided such
                legitimate interests are not overridden by the interests or
                fundamental rights and freedoms of the person whose information
                is at issue.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                More specifically, Appreciate Stuff may use your Personal
                Information and other data to:
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionList>
                <li>administer your Appreciate Stuff profile or account;</li>
                <li>deliver content on or through the Services;</li>
                <li>
                  maintain proper business records and other relevant records;
                </li>
                <li>respond to your questions, comments or other messages;</li>
                <li>
                  send you communications about Appreciate Stuff’s Services;
                </li>
                <li>
                  contact you about issues with content you may have uploaded or
                  posted through the Services;
                </li>
                <li>
                  provide ongoing technical support related to the Services;
                </li>
                <li>
                  communicate with you regarding additional uses of your
                  Personal Information beyond the scope of this list or the
                  Policy;
                </li>
                <li>
                  improve the content and general administration of the
                  Services;
                </li>
                <li>
                  perform internal operations related to the Services (e.g.,
                  spam and fraud prevention);
                </li>
                <li>
                  troubleshoot software issues and operational problems with the
                  Services;
                </li>
                <li>conduct data analysis and testing; and/or</li>
                <li>monitor the usage of the Services.</li>
              </PrivacyPageSectionList>
              <PrivacyPageSectionParagraph>
                In order to use certain Appreciate Stuff Services, you may
                upload data related to your ownership of luxury products and
                other items. This could include data such as purchase history,
                insurance information, and other data that could be considered
                Personal Information to the extent such data may be reasonably
                capable of identifying you, directly or indirectly. Appreciate
                Stuff will only use this and other voluntarily provided Personal
                Information (and other data) as instructed or as necessary to
                fulfill the applicable purpose(s) for which you provided the
                data. For example, if you choose to use Appreciate Stuff’s
                insurance Services for your luxury products and other items, we
                will seek your consent to share your information with
                third-party insurance providers that help provide certain
                aspects of those insurance Services on our behalf.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph bold>
                Cookies and Other Tracking Technologies
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                There are areas of the Services where Appreciate Stuff or its
                service providers may automatically collect certain data as you
                use the Services and navigate elsewhere online, such as your
                internet protocol (IP) address and other data about your
                internet connection, your operating system, browser type, and
                other services or equipment you use to access the Site or App,
                and usage data about your interaction with Appreciate Stuff’s
                Services. This automatically collected data generally does not
                identify any specific individual, but to the extent such data is
                reasonably capable of identifying you or another person, we will
                treat such data as Personal Information.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                You may be able to disable cookies by consulting your browser
                and/or computer settings. Please note that any disabling of
                cookies could affect how the Services appear and/or operate for
                you.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff may use third-party service providers which
                collect and aggregate information to analyze how users interact
                with the Services, in order to optimize the performance of the
                Services.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                For example, the Sites, Apps and certain other Services may use
                Google Analytics, which uses tracking technology to analyze how
                you use online aspects of the Services. The information
                collected by this third-party provider about your use of the
                Services (including your IP address) is transmitted to and
                stored on a Google server in the United States. Google uses this
                information to assess your use of the Services, providing
                reports on data such as how often you visit, what pages you view
                when you visit, and what other websites you visited prior to
                visiting or using our Services, for example. Appreciate Stuff
                uses these reports and data to collect certain demographic
                information such as what people are interested in according to
                their age and gender, so that we can better understand and
                segment our userbase to deliver content that should be more
                interesting to you. Google may transfer this information to
                third parties, if required by law or if third parties process
                the information on behalf of Google. An overview of Google’s
                data privacy practices for Google Analytics may be available at{' '}
                <a
                  href="https://support.google.com/analytics/answer/6004245"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://support.google.com/analytics/answer/6004245
                </a>
                . For more information on Google’s privacy practices generally,
                please review Google’s privacy policy at{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://policies.google.com/privacy
                </a>
                . To opt-out of being tracked by Google Analytics, you may be
                able to download and install the Google Analytics Opt-out
                Browser Add-on at{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
                . These Google services may also cause you to receive
                personalized ads based on your browsing behavior. You may be
                able to opt-out of receiving these personalized ads by using the
                settings at{' '}
                <a
                  href="https://adssettings.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://adssettings.google.com/
                </a>
                .
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff may use other analytics service providers, such
                as Mixpanel, which uses tracking technologies to collect certain
                details about how you and other users interact with our
                Services. This includes information about your location, what
                device or browser you use, how frequently and meaningfully you
                interact with our Services, including the extent to which you
                pay for the Services, and the amount of time you spend using our
                Services. To learn more about how Mixpanel handles any
                information it collects from you through this process, please
                review Mixpanel’s privacy policy at{' '}
                <a
                  href="https://mixpanel.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://mixpanel.com/legal/privacy-policy/
                </a>
                .
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                The Services may use related third-party tracking technologies
                that are operated by other service providers such as Amazon.
                These third-party services may collect device-related data such
                as your IP address, and such tracking technologies are used to
                recognize your device or your browser when you return to use the
                Services, to learn about what ads you see and interact with, and
                to serve you with ads about other products or services in which
                you may be interested based on your browsing activity before and
                after you leave or stop using the Services. Data collected
                through these practices also is analyzed to measure the
                effectiveness of ads for statistical and marketing research
                purposes. To learn more about certain choices you may have with
                respect to how Amazon handles Personal Information and other
                data it collects from you, please see how Amazon (and its
                affiliates) use interest-based ads at{' '}
                <a
                  href="http://www.amazon.com/b/?&node=5160028011"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  http://www.amazon.com/b/?&amp;node=5160028011
                </a>
                . You may be able to withdraw your consent to the use of Amazon
                tracking technologies for interest-based ads by visiting Amazon
                {`'`}s advertising preferences at http://www.amazon.com/adprefs.
                More general information about how Amazon handles your Personal
                Information is available through Amazon’s privacy notice at {''}
                <a
                  href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ
                </a>
                , too, and should be reviewed.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                All of the above-referenced IP addresses and other data will be
                collected in an automated manner and we may maintain it or
                associate it with certain other data, which may include Personal
                Information you provide voluntarily through the Services, in
                order to make inferences about you and the kinds of products and
                services that may interest you. This helps us improve our
                Services, deliver better and more personalized Services,
                estimate our audience size and usage patterns, and store
                information about your preferences.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Whenever you log into the Services using your email address,
                username and password or other account access information on
                different devices, the Services may recognize you as the same
                user and track your behavior across the different devices you
                use to access the Services. You may be able to limit
                cross-device tracking to some degree by logging out of your
                account on each device before using the Services on another
                device, but we cannot guarantee that you will be able to opt-out
                of all cross-device tracking as a result of the account-based
                nature of our Services.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                By providing to Appreciate Stuff the Personal Information and
                other data referenced above, you agree that Appreciate Stuff may
                use such Personal Information and other data in accordance with
                the terms of this Policy.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="sharing-information">
              3. Sharing Information
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff will share or permit third-party access to
                Personal Information collected through the Services as necessary
                to fulfill the purposes for which the Personal Information was
                collected, as otherwise set forth below, or with the express
                consent of the user.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff may share certain portions of Personal
                Information with vendors that help provide certain Services on
                behalf of Appreciate Stuff in order to make the Services
                function properly. This may include sharing certain kinds of
                Personal Information, including without limitation, your name
                and email address with our insurance coverage provider, and your
                email address with email service providers such as HubSpot,
                which will help us deliver personalized marketing materials to
                your inbox. To learn more about how HubSpot uses your email and
                any other Personal Information it collects from you through this
                process, please see HubSpot’s privacy policy at{' '}
                <a
                  href="https://legal.hubspot.com/privacy-policy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  https://legal.hubspot.com/privacy-policy.
                </a>
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff will disclose your Personal Information or
                other data if it reasonably believes it is required to do so by
                law or in cooperation with a government or law enforcement
                investigation. Appreciate Stuff may also share Personal
                Information or other data in order to avoid imminent physical
                harm to any person or damage to property.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Personal Information received or held by Appreciate Stuff may be
                transferred to any entity that succeeds to the assets or
                business of Appreciate Stuff by any merger, consolidation,
                combination, reorganization, sale of assets, or in connection
                with any transfer as part of any insolvency or bankruptcy
                proceeding. Under such circumstances, Appreciate Stuff will make
                reasonable efforts to cause any successor to agree to abide by
                the terms of this Policy.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                We also may disclose your Personal Information to other service
                providers to carry out our obligations and enforce our rights
                arising from any contracts related to your use of the Services,
                or as otherwise described to you at or before the point when we
                collect your Personal Information.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Other than what is referenced above, the Personal Information
                and other data collected from you is neither shared with nor
                sold to any person or entity outside of Appreciate Stuff.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="rights-and-choices">
              <span className="hidden lg:block">
                4. Your Rights and Choices
              </span>
              <span className="block lg:hidden">4. No Professional Advice</span>
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Depending on where you reside, you may be able to exercise
                certain rights with respect to Personal Information you provided
                to Appreciate Stuff, or that Appreciate Stuff may have collected
                about you, such as rights to:
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionList>
                <li>
                  Confirm whether Appreciate Stuff has collected and is
                  processing your Personal Information and, if so, you may have
                  a right to access such data;
                </li>
                <li>
                  Correct any inaccuracies about your Personal Information,
                  depending on what kind of Personal Information it is and the
                  purposes for which Appreciate Stuff is processing that data;
                </li>
                <li>
                  Delete Personal Information you provided to Appreciate Stuff
                  or that we have otherwise collected about you;
                </li>
                <li>
                  Obtain a copy of Personal Information Appreciate Stuff
                  maintains about you in a portable and readily usable format,
                  if technically feasible, that would allow you to transfer such
                  Personal Information to another service or provider, where the
                  applicable processing is carried out by automated means; and
                </li>
                <li>
                  Opt-out of any processing of your Personal Information for the
                  purposes of, as applicable, (1) targeted advertising based on
                  your browsing behavior before and after you visit or use the
                  Services, (2) any sale of your Personal Information, or (3)
                  any profiling of you based on collected Personal Information
                  in a way that would produce legal ramifications or similarly
                  significant real-world effects on you.
                </li>
              </PrivacyPageSectionList>
              <PrivacyPageSectionParagraph>
                If you would like to request the ability to access, review,
                edit, or delete any Personal Information that Appreciate Stuff
                may have collected about you, opt-out of receiving further
                information from Appreciate Stuff, limit what we share, or if
                you otherwise wish to exercise available privacy rights or ask
                us to cease using your Personal Information in the manners
                specified in this Policy (subject to any applicable legal
                exceptions), please contact us at support@appreciate.it.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff may refuse any request made regarding collected
                Personal Information if it is unable to verify the identity of
                the person making the request or if it cannot authenticate the
                legitimacy of the request using commercially reasonable efforts.
                Under such circumstances, Appreciate Stuff may follow up with
                you for additional information as reasonably necessary to
                authenticate your request. Subject to applicable legal
                requirements, if Appreciate Stuff refuses to act on a request
                you make based on the rights listed at the beginning of this
                section, you may have a right to submit an appeal by contacting
                us using the same method as when you made the initial request.
                In the event Appreciate Stuff must deny your appeal, we will
                provide a way for you to forward your complaint to the
                appropriate legal authorities, depending on where you reside.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Any removal of content by Appreciate Stuff does not ensure or
                guarantee complete or comprehensive removal of the content in
                all places. The content may have been shared or reposted by
                other parties, or federal or state law may require maintenance
                of the content or information. Appreciate Stuff will do its best
                to accommodate your request, but we cannot guarantee we can
                remove all Personal Information from the specified uses.
                Therefore, please be as specific as possible in your request. If
                the request relates to information that Appreciate Stuff needs
                to make the Services function properly for you, you may not be
                able to use the Services properly moving forward.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff reserves the right to maintain proper business
                records as required by law, or for otherwise legitimate business
                purposes to the extent permitted by law, even if such records
                contain your Personal Information.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                If you would like to opt-out of receiving promotional emails
                from Appreciate Stuff, please follow the opt-out instructions at
                the bottom of the email or send us a detailed email at{' '}
                <a
                  href="mailto:support@appreciate.it"
                  className="text-theme-indigo-3"
                >
                  support@appreciate.it.
                </a>
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Some browsers have a “do not track” feature that lets you tell
                websites that you do not want to have your online activities
                tracked. As referenced above, Appreciate Stuff does not sell any
                Personal Information collected through the Services, which are
                not currently configured to respond to “do not track” or similar
                automated privacy controls. To learn more about ways to possibly
                opt-out of certain kinds of tracking that occur when you browse
                the Internet generally and may lead to targeted advertising,
                visit the Network Advertising Initiative website (at{' '}
                <a
                  href="http://www.networkadvertising.org/choices"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  http://www.networkadvertising.org/choices
                </a>{' '}
                ) and the Digital Advertising Alliance website (at{' '}
                <a
                  href="http://www.aboutads.info/choices"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  http://www.aboutads.info/choices
                </a>{' '}
                ). The industry opt-out tools described above only function for
                users of the Site. If you use the App and would like to opt-out
                of receiving targeted ads while using the App, then you must
                download and make choices through the DAA’s free mobile
                application AppChoices for each device you use (more info
                available at{' '}
                <a
                  href="youradchoices.com/appchoices"
                  target="_blank"
                  rel="noreferrer"
                  className="text-theme-indigo-3 break-all"
                >
                  youradchoices.com/appchoices
                </a>{' '}
                ). You may also consult the settings on your mobile device for
                further options regarding cross-app advertising.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Options you select are browser- and device-specific, and there
                is no guarantee that these industry-provided opt-out tools will
                prevent all targeted advertising. As noted previously in this
                Policy, it is possible that certain third parties may collect or
                receive information through the Services. Since some of these
                third parties may respond differently than Appreciate Stuff to
                “do not track” requests, you should consult the applicable
                privacy policies of those third parties for that information.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="data-security-and-retention">
              5. Data Security and Retention
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff’s Services use, implement and maintain industry
                standard security measures to protect against unauthorized
                access, alteration, disclosure or destruction of Personal
                Information and other data stored on or through our Services,
                both in storage and in transmission. For example, among other
                data safeguards, the Personal Information that Appreciate Stuff
                collects will be stored within a Postgres database that is
                encrypted and protected within a private network that is not
                possible to access publicly.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                While Appreciate Stuff takes the issue of protecting your
                Personal Information seriously, you should exercise discretion
                in what information you disclose and/or transmit through the
                Services. Appreciate Stuff cannot guarantee that information
                transmitted online is fully secure. The transmitted information
                may be intercepted by others before it reaches Appreciate Stuff.
                If you are concerned about sending information to Appreciate
                Stuff online, please send the information by mail or call us to
                make other arrangements. Appreciate Stuff is not responsible for
                the security of information transmitted online.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff retains collected information for a reasonable
                amount of time in order to fulfill the stated purpose for why
                the information was collected. Appreciate Stuff also will retain
                collected information connected to business records for periods
                of time required by law. If Appreciate Stuff determines that
                collected information is no longer needed, it will delete such
                information. Our collection times will be consistent with
                applicable law.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="children-information">
              6. Children{`'`}s Information
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                The Services are not directed at, marketed to, nor intended for,
                individuals under eighteen (18) years of age. No one under the
                age of 18 is permitted to provide any information on or through
                the Services. If you are under 18 years of age, DO NOT: use or
                provide any information on or through the Services; use any of
                the Services’ features; use any interactive or public commenting
                feature on the Services; and/or provide any information about
                yourself to Appreciate Stuff. Appreciate Stuff does not and will
                not knowingly collect any data, including Personal Information,
                from any person under 18 years of age and Appreciate Stuff will
                take prompt steps to delete any such information if it is
                inadvertently received. If Appreciate Stuff learns that we have
                received Personal Information from any person under 18 years of
                age, Appreciate Stuff will delete that information. If you
                believe a minor may have uploaded or posted information through
                the Services without authorization, and such information is
                publicly available, or if you believe Appreciate Stuff might
                otherwise have information from or about any person under 18
                years of age, please contact us immediately at{' '}
                <a
                  href="mailto:support@appreciate.it"
                  className="text-theme-indigo-3"
                >
                  support@appreciate.it.
                </a>
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="appreciate-app">
              7. The appreciate App
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                Standard data and other fees may be charged by your mobile phone
                carrier when using the App, so please be aware of such fees.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="non-us-concerns">
              8. Non-U.S. Concerns
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                The Services are meant for individuals within the United States.
                Appreciate Stuff only knowingly collects information from
                individuals within the United States. If you provide information
                to Appreciate Stuff from outside of the United States, you do so
                at your own risk. If you are outside of the United States, you
                are responsible for complying with any local laws regarding your
                use of the Services, and any related data collection. You also
                agree and acknowledge that by providing any data through the
                Services, including Personal Information, that such information
                will be transmitted to, and stored in, the United States.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                If you are visiting from the European Union or other regions
                with laws governing data collection and use, please note that
                you are agreeing to the transfer of your information to the
                United States and processing globally. By providing your
                information, you consent to any transfer and processing in
                accordance with this Policy.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="external-links">
              9. External Links and Third-Party interactivity
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                The Services may contain links to external websites or other
                online services, including those embedded in third-party
                advertisements or sponsor information, which are not owned or
                controlled by Appreciate Stuff. We are not responsible for the
                privacy practices and data collection policies for such
                third-party services. You should consult the privacy policies of
                those third-party services for details.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff also may allow interaction between our Services
                and other third-party services online, including Google,
                Facebook and other social media providers. Such interaction may
                include plugins that allow you to login to the Appreciate Stuff
                Services using third-party account information and/or share
                information with persons outside of the Services. Please consult
                the privacy policies of such third-party providers before using
                them to make sure you are comfortable with the level of sharing.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
            <PrivacyPageSectionTitle id="contact-info">
              10. Contact Information
            </PrivacyPageSectionTitle>
            <PrivacyPageSectionContent>
              <PrivacyPageSectionParagraph>
                If you have any questions regarding this Policy, please contact
                Appreciate Stuff at{' '}
                <a
                  href="mailto:support@appreciate.it"
                  className="text-theme-indigo-3"
                >
                  support@appreciate.it.
                </a>
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                Appreciate Stuff intends to strictly enforce this Policy. If you
                believe there has been some violation of this Policy, please
                contact us.
              </PrivacyPageSectionParagraph>
              <PrivacyPageSectionParagraph>
                This Policy was last updated on October 16, 2021.
              </PrivacyPageSectionParagraph>
            </PrivacyPageSectionContent>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
