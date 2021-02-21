import React from "react";
import ProtectedRoutes from "./nav/ProtectedRoutes";
import UnprotectedRoutes from "./nav/UnprotectedRoutes";
import NavFab from "./components/NavFab";
import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";
import { ThemeProvider } from "react-native-magnus";
import { theme } from "./styles/theme";

import Amplify from "aws-amplify";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import awsmobile from "./aws-exports";
import { useUserSession } from "./auth/userSession";

const GRAPHQL_ENDPOINT =
  "https://wagger-react-native-db.herokuapp.com/v1/graphql";

// Configure AWS Amplify
Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

export const FlexSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  const { user, getUserJwt } = useUserSession();

  // Setup Apollo Links to connect to endpoint and add headers
  const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });

  const authLink = setContext((_, { headers }) => {
    // Get the authentication token and role from user if it exists
    const token = getUserJwt();
    const role = "user";

    // Return the headers and role to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
        "x-hasura-role": role ? role : "",
      },
    };
  });

  // Initialize Apollo Client
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} />
      <FlexSafeAreaView>
        {!user ? (
          <UnprotectedRoutes />
        ) : (
          <ApolloProvider client={client}>
            <ProtectedRoutes />
            <NavFab />
          </ApolloProvider>
        )}
      </FlexSafeAreaView>
    </ThemeProvider>
  );
};

export default App;
