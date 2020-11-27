import React from "react";
import Amplify from "aws-amplify";
import styled from "styled-components";
import Routes from "./routes/routes";
import { StatusBar, SafeAreaView } from "react-native";
import { Button, Header, Icon, ThemeProvider } from "react-native-magnus";
import {} from "react-native-magnus";
import { withAuthenticator } from "aws-amplify-react-native";
import awsmobile from "./aws-exports";

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

const App = () => (
  <ThemeProvider>
    <StatusBar barStyle={"dark-content"} />
    <FlexSafeAreaView>
      <Header
        p="lg"
        borderBottomWidth={1}
        borderBottomColor="gray200"
        alignment="center"
        prefix={
          <Button bg="transparent">
            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
          </Button>
        }
      >
        Wagger
      </Header>
      <Routes />
    </FlexSafeAreaView>
  </ThemeProvider>
);

export default withAuthenticator(App);
