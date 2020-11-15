import React from "react";
import Amplify from "@aws-amplify/core";
import { Authenticator } from "aws-amplify-react-native";
import { AmplifyTheme } from "../AmplifyTheme/AmplifyTheme";
import awsmobile from "../../aws-exports";

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

const Login = () => (
  <Authenticator
    usernameAttributes="email"
    signUpConfig={signUpConfig}
    theme={AmplifyTheme}
  />
);

export default Login;
