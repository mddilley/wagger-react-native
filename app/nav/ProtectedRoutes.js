import React from "react";
import { Router, Scene } from "react-native-router-flux";

import AppHeader from "../components/AppHeader";
import { routesConfig, transitionConfig } from "./config";

const ProtectedRoutes = () => (
  <Router>
    <Scene navBar={AppHeader} key="root" transitionConfig={transitionConfig}>
      {Object.entries(routesConfig).map(([key, config]) => {
        const { component, initial = false } = config;

        return <Scene key={key} component={component} initial={initial} />;
      })}
    </Scene>
  </Router>
);
export default ProtectedRoutes;
