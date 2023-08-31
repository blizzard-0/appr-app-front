import {
  publicRuntimeConfig,
  getServerRuntimeConfig,
} from '../../modules/config';

const AppTestPage: React.FC<{ config: string }> = ({ config }) => {
  return (
    <div>
      <p>Config check:</p>
      <pre>{config}</pre>
    </div>
  );
};

export default AppTestPage;

export function getServerSideProps() {
  const {
    NEXT_PUBLIC_APP_BACKEND_BASE_URL,
    NEXT_PUBLIC_APP_FRONTEND_BASE_URL,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    NODE_ENV,
  } = getServerRuntimeConfig();
  const serverSideConfig = {
    NEXT_PUBLIC_APP_BACKEND_BASE_URL,
    NEXT_PUBLIC_APP_FRONTEND_BASE_URL,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    NODE_ENV,
  };
  const publicConfig = {
    NEXT_PUBLIC_APP_BACKEND_BASE_URL:
      publicRuntimeConfig.NEXT_PUBLIC_APP_BACKEND_BASE_URL,
    NEXT_PUBLIC_APP_FRONTEND_BASE_URL:
      publicRuntimeConfig.NEXT_PUBLIC_APP_FRONTEND_BASE_URL,
    NEXT_PUBLIC_GRAPHQL_ENDPOINT:
      publicRuntimeConfig.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  };
  return {
    props: {
      config: JSON.stringify(
        {
          serverSideConfig,
          publicConfig,
        },
        null,
        2,
      ),
    },
  };
}
