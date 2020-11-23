import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import Amplify from "aws-amplify";
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

const App = () => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <Text>You made it into the app!</Text>
  </ScrollView>
);

export default withAuthenticator(App);
