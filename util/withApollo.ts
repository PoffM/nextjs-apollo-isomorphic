import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split
} from "apollo-boost/lib/index";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import nextWithApollo from "next-with-apollo";

export const withApollo = nextWithApollo(({ initialState }) => {
  let uri: string;
  let ssl = "";
  if (process.browser) {
    uri = `${window.location.host}/graphql`;
    if (window.location.protocol === "https:") {
      ssl = "s"
    }
  } else {
    uri = `localhost:${process.env.PORT}/graphql`;
  }

  const httpLink = new HttpLink({
    uri: `http${ssl}://${uri}`
  });

  // Setup HTTP and WebSocket links, but only enable WebSocketLink for the browser, not SSR.
  const link = process.browser
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        new WebSocketLink({
          uri: `ws${ssl}://${uri}`,
          options: {
            reconnect: true
          }
        }),
        httpLink
      )
    : httpLink;

  return new ApolloClient({
    link,
    cache: new InMemoryCache().restore(initialState || {})
  });
});
