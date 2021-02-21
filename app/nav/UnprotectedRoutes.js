import React from "react";
import CustomLogin from "../auth/CustomLogin";
import CustomSignup from "../auth/CustomSignup";
import { Router, Scene } from "react-native-router-flux";

const MyTransitionSpec = {
  duration: 0,
};

const transitionConfig = () => ({
  transitionSpec: MyTransitionSpec,
});

const UnprotectedRoutes = () => (
  <Router>
    <Scene key="root" transitionConfig={transitionConfig}>
      <Scene key="login" component={CustomLogin} initial />
      <Scene key="login" component={CustomSignup} />
    </Scene>
  </Router>
);
export default UnprotectedRoutes;
