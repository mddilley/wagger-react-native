import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "../screens/Home";
import AllPlaydates from "../screens/AllPlaydates";
import MyPlaydates from "../screens/MyPlaydates";
import PastPlaydates from "../screens/PastPlaydates";
import Preferences from "../screens/Preferences";

const Routes = () => (
  <Router>
    <Stack hideNavBar key="root">
      <Scene key="home" component={Home} initial />
      <Scene key="my-playdates" component={MyPlaydates} />
      <Scene key="all-playdates" component={AllPlaydates} />
      <Scene key="past-playdates" component={PastPlaydates} />
      <Scene key="preferences" component={Preferences} />
    </Stack>
  </Router>
);
export default Routes;
