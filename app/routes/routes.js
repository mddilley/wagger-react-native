import React from "react";
import { Router, Scene } from "react-native-router-flux";

import AppHeader from "../components/AppHeader";
import { routesConfig } from "./config";

const Routes = () => (
  <Router>
    <Scene navBar={AppHeader} key="root">
      {Object.entries(routesConfig).map(([key, config]) => {
        const { component, initial = false } = config;

        return <Scene key={key} component={component} intial={initial} />;
      })}
    </Scene>
  </Router>
);
export default Routes;
