import React, { useState, useEffect } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  MutationOptions,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { publicRuntimeConfig } from './modules/config';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { onError } from '@apollo/client/link/error';
import { useToast } from './components/Toast';
import * as Sentry from '@sentry/nextjs';

const DEFAULT_TIMEOUT = 1000 * 10; // 10 second timeout
const DEFAULT_OPTIONS: Partial<MutationOptions> = {
  context: { timeout: DEFAULT_TIMEOUT }, // request timeout for catch network errors
  errorPolicy: 'all', // for only catch network errors. Don't need to catch Graphql errors, part of the response as errors, alongside data
};

const link = new HttpLink({
  uri: publicRuntimeConfig.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  credentials: 'include',
});

const timeoutLink = new ApolloLinkTimeout(DEFAULT_TIMEOUT);
const timeoutHttpLink = timeoutLink.concat(link);
const client = new ApolloClient({
  link: from([timeoutHttpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Image: {
        keyFields: ['url'],
      },
    },
  }),
  defaultOptions: {
    query: DEFAULT_OPTIONS,
    mutate: DEFAULT_OPTIONS,
  },
});

export const ApolloProviderWithErrorContext: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { pushError, toastElement } = useToast();

  useEffect(() => {
    const errorLink = onError(({ networkError, graphQLErrors }) => {
      if (graphQLErrors) {
        Sentry.withScope(function (scope) {
          scope.setLevel(Sentry.Severity.Critical);
          Sentry.captureMessage(JSON.stringify(graphQLErrors));
        });
        pushError('Something went wrong.', { autoClose: true });
      }
      if (networkError) {
        Sentry.withScope(function (scope) {
          scope.setLevel(Sentry.Severity.Critical);
          Sentry.captureMessage(JSON.stringify(networkError));
        });
        pushError(networkError.message, { autoClose: true });
      }
    });
    client.setLink(from([errorLink, timeoutHttpLink]));
  }, [pushError]);

  return (
    <>
      {toastElement}
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};
