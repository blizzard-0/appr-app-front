import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRegisterGmailAuth_Mutation } from '../../../generated/graphql';
import { routes } from '../../../modules/routes';
import { ProgressIndicator } from '@/components/v2';

export const REGISTER_GMAIL_AUTH_MUTATION = gql`
  mutation registerGmailAuth_($code: String!) {
    registerGmailAuth(code: $code) {
      ... on RegisterGmailAuthMutationSuccess {
        status
      }
    }
  }
`;

const GmailAuthPage = () => {
  const router = useRouter();
  const { code } = router.query;
  const [registerGmailAuthMutation, { data, loading }] =
    useRegisterGmailAuth_Mutation();
  useEffect(() => {
    if (code)
      registerGmailAuthMutation({
        variables: {
          code: code as string,
        },
      });
  }, [code, registerGmailAuthMutation]);

  const responseType = data?.registerGmailAuth?.__typename;
  if (loading) {
    return <ProgressIndicator active />;
  }
  if (!loading && responseType === 'RegisterGmailAuthMutationSuccess')
    router.push(routes.appFrontend.myWallet.fillURL(null) + '?gmail_sync=true');
  return ' ';
};

export default GmailAuthPage;
