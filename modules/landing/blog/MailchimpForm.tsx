import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url =
  'https://appreciate.us13.list-manage.com/subscribe/post?u=bf3c3686b437078dc50d362d9&id=f4d2601fca';

interface MailchimpFormProps {
  status: string | null;
  message: string | Error | null;
  onValidated: (data: any) => void;
}

// a basic form
const MailChimpForm: React.FC<MailchimpFormProps> = ({
  status,
  message,
  onValidated,
}) => {
  let email: HTMLInputElement | null;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="px-8 lg:px-0">
      <label className="block text-left w-full leading-5 text-xs mt-1 ">
        Email
      </label>
      <input
        className="bg-purple  w-full border-light-gray mb-10 lg:mb-8 text-sm px-0 py-1 focus:outline-none focus:outline-offset-0 focus:shadow-none focus:ring-0"
        ref={(node) => (email = node)}
        type="email"
        placeholder=""
        style={{ border: '0', borderBottom: '1px solid' }}
      />

      <button
        className="bg-light-gray w-full text-black text-base rounded-full  py-1 mt-1 tracking-widest lg:tracking-wide uppercase hover:text-purple"
        onClick={submit}
      >
        Subscribe
      </button>

      {status === 'sending' && <div className=" mt-4 p-2">sending...</div>}
      {status === 'error' && (
        <div
          className="mt-4 p-2 text-xs text-light-gray"
          dangerouslySetInnerHTML={{ __html: message as string }}
        />
      )}
      {status === 'success' && (
        <div
          className=" mt-4 p-2 text-xs text-light-gray"
          dangerouslySetInnerHTML={{ __html: message as string }}
        />
      )}
    </div>
  );
};
// use the render prop and your custom form
export const CustomForm = () => {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <MailChimpForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
};
