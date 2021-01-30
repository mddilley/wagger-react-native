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
      <Scene key="Wagger" component={Home} initial />
      <Scene key="My Playdates" component={MyPlaydates} />
      <Scene key="Playdates" component={AllPlaydates} />
      <Scene key="Previous Playdates" component={PastPlaydates} />
      <Scene key="Preferences" component={Preferences} />
    </Stack>
  </Router>
);
export default Routes;
