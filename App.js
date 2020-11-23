import React from "react";
import Amplify from "aws-amplify";
import Routes from "./routes/routes";
import { ThemeProvider } from "react-native-magnus";
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
  <ThemeProvider>
    <Routes />
  </ThemeProvider>
);

export default withAuthenticator(App);
