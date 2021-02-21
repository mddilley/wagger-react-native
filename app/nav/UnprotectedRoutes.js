import React from "react";
import AuthLogo from "../auth/AuthLogo";
import CustomLogin from "../auth/CustomLogin";
import CustomSignup from "../auth/CustomSignup";
import { Router, Scene } from "react-native-router-flux";
import { Div } from "react-native-magnus";
import { transitionConfig } from "../nav/config";

const UnprotectedRoutes = () => (
  <Router>
    <Scene header={<AuthLogo />} key="root" transitionConfig={transitionConfig}>
      <Scene key="login" component={CustomLogin} />
      <Scene key="signup" component={CustomSignup} />
    </Scene>
  </Router>
);
export default UnprotectedRoutes;
