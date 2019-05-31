import ApolloClient, { InMemoryCache } from "apollo-boost/lib/index";
import nextWithApollo from "next-with-apollo";

export const withApollo = nextWithApollo(({ initialState }) => {
  return new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache().restore(initialState || {})
  });
});
