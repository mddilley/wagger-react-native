import React from "react";
import { ScrollView, StatusBar } from "react-native";
import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
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

const App = () => {
  return (
    <Authenticator usernameAttributes="email" signUpConfig={signUpConfig}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
      </ScrollView>
    </Authenticator>
  );
};

export default App;
