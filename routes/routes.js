import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "../views/Home";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} initial />
    </Stack>
  </Router>
);
export default Routes;
