export const AdditionalHelp: React.FC<{ onBack: () => void }> = ({
  onBack,
}) => (
  <>
    <h2 className="text-32-px leading-42-px text-gray-950 mb-3 font-maison-neue-demi">
      How syncing your Gmail account works
    </h2>
    <p className="text-gray-800 text-base leading-snug mb-5">
      Sync your Gmail account connects your Gmail or Google Workspace inboxes
      with your appreciate account.
      <br />
      <br />
      Once your account is connected, receipts from brands and companies that we
      support are automatically added at each scan to your appreciate wallet.
      You’ll never have to remember to manually add an item or have to forward
      an email.
      <br />
      <br />
      Once authorized, import is not immediate; your inbox will be scanned
      within 24 hours.
      <br />
      <br />
      Make sure your inbox contains only recent receipt emails. When at sign up
      and connecting, appreciate will look for all receipt emails, from the last
      7 days that we support.
      <br />
      <br />
      When you setup your Gmail or Google Workspace connect account, appreciate
      never asks for or stores your password. Appreciate uses{' '}
      <span className="text-indigo cursor-pointer">OAuth</span> to authorize
      access to receipt emails from Google without ever needing your sign-in
      credentials. You can revoke OAuth access at any time, either from your
      appreciate account settings, or{' '}
      <span className="text-indigo cursor-pointer">directly from Google</span>.
    </p>
    <a
      className="flex items-center cursor-pointer text-gray-900 text-base leading-snug"
      onClick={onBack}
    >
      <svg
        width="11"
        height="17"
        viewBox="0 0 11 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path
          d="M9.48985 15.9898L2 8.5L9.48985 1.01015"
          stroke="#222222"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M9.48985 15.9898L2 8.5L9.48985 1.01015"
          stroke="#222222"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
      <span>Back to setting up Sync</span>
    </a>
  </>
);
