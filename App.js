import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import Amplify from "@aws-amplify/core";
import { Authenticator } from "aws-amplify-react-native";
import awsmobile from "./aws-exports";

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <Authenticator usernameAttributes="email" />
    </ScrollView>
  );
}
