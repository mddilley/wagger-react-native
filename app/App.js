import React from "react";
import styled from "styled-components";
import Routes from "./routes/routes";
import NavFab from "./components/NavFab";
import { StatusBar, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-magnus";

import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import awsmobile from "./aws-exports";
import { useUserSession } from "./auth/userSession";

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
  ],
};

export const FlexSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  const { user } = useUserSession();

  return (
    <Authenticator hideDefault={true} amplifyConfig={signUpConfig}>
      {user && (
        <ThemeProvider>
          <StatusBar barStyle={"dark-content"} />
          <FlexSafeAreaView>
            <Routes />
            <NavFab />
          </FlexSafeAreaView>
        </ThemeProvider>
      )}
    </Authenticator>
  );
};

export default App;
