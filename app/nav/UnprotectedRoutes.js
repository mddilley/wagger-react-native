import React from "react";
import AuthLogo from "../auth/authComponents/AuthLogo";
import CustomLogin from "../auth/CustomLogin";
import CustomSignup from "../auth/CustomSignup";
import ConfirmSignup from "../auth/ConfirmSignup";
import { Router, Scene } from "react-native-router-flux";
import { transitionConfig } from "../nav/config";

const UnprotectedRoutes = () => (
  <Router>
    <Scene header={<AuthLogo />} key="root" transitionConfig={transitionConfig}>
      <Scene key="login" component={CustomLogin} />
      <Scene key="signup" component={CustomSignup} />
      <Scene key="confirmSignup" component={ConfirmSignup} />
    </Scene>
  </Router>
);
export default UnprotectedRoutes;
