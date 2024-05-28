// apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Set up the HTTP link
const httpLink = new HttpLink({
  uri: 'https://wordpress-484386-3840570.cloudwaysapps.com/graphql', // Replace with your WPGraphQL endpoint
});

// Set up any headers or context
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Add any additional headers here
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
