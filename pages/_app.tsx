import { ApolloClient } from "apollo-boost/lib/index";
import { WithApolloProps } from "next-with-apollo";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { withApollo } from "../util/withApollo";

interface AppProps extends WithApolloProps<any> {
  apollo: ApolloClient<any>;
}

class MyApp extends App<AppProps> {
  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
