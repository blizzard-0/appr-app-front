import { CopyEmailButton } from '../CopyEmail';
import { NumberList } from './NumberList';

export const AdditionalHelp: React.FC<{ emailAddress: string }> = ({
  emailAddress,
}) => {
  return (
    <>
      <h2 className="mb-6 lg:mb-5 text-gray-950 font-maison-neue-demi text-2xl lg:text-32-px lg:leading-42-px lg:whitespace-nowrap">
        How to forward a receipt
      </h2>
      <ul className="grid grid-cols-1 gap-6 lg:gap-10">
        <NumberList index={1}>
          Go to your email app and search for the order receipt which you
          received.
        </NumberList>
        <NumberList index={2}>
          While viewing the email, find the{' '}
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block -mt-1 mx-0.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9319 0.39506L23.6046 7.00767C24.1318 7.53441 24.1318 8.38844 23.6046 8.91519L16.3502 16.1632C15.823 16.6899 14.9683 16.6899 14.4411 16.1632C13.9138 15.6364 13.9138 14.7824 14.4411 14.2557L19.3908 9.31025H5.85C4.1103 9.31025 2.7 10.7193 2.7 12.4575V16.6512C2.7 17.3961 2.09558 18 1.35 18C0.604415 18 0 17.3961 0 16.6512V12.4575C0 9.22945 2.61913 6.61261 5.85 6.61261H19.3908L14.0228 2.30258C13.4955 1.77583 13.4955 0.921806 14.0228 0.39506C14.55 -0.131687 15.4047 -0.131687 15.9319 0.39506Z"
              fill="#222222"
            />
          </svg>{' '}
          forward action. You may have to find the ellipsis{' '}
          <svg
            width="25"
            height="4"
            viewBox="0 0 25 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block -mt-0.5 mx-0.5"
          >
            <circle cx="2" cy="2" r="2" fill="#222222" />
            <circle cx="12" cy="2" r="2" fill="#222222" />
            <circle cx="23" cy="2" r="2" fill="#222222" />
          </svg>{' '}
          to see the option to forward.
        </NumberList>
        <NumberList index={3}>
          In the &quot;To&quot; section, input{' '}
          <strong className="font-maison-neue-demi">send@appreciate.it</strong>{' '}
          and send the forwarded email.
          <div className="mt-3"></div>
          <CopyEmailButton />
        </NumberList>
        <NumberList index={4}>
          Once we receive your email, we will send you a confirmation email and
          add the item to your wallet. If you have multiple receipts, please
          forward them individually.
        </NumberList>
      </ul>
      <p className="mt-8 lg:mt-10 text-gray-800 text-14-px leading-snug">
        Make sure to forward the emails from the same email associated to your
        appreciate account. You signed up using{' '}
        <strong className="font-maison-neue-demi">{emailAddress}</strong>.
      </p>
    </>
  );
};
