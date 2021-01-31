import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "../screens/Home";
import AllPlaydates from "../screens/AllPlaydates";
import MyPlaydates from "../screens/MyPlaydates";
import PastPlaydates from "../screens/PastPlaydates";
import Profile from "../screens/Profile";

export const routeConfigs = {
  wagger: { title: "Wagger", component: Home, initial: true },
  myPlaydates: { title: "My Playdates", component: MyPlaydates },
  allPlaydates: { title: "Playdates", component: AllPlaydates },
  pastPlaydates: { title: "Past Playdates", component: PastPlaydates },
  profile: { title: "Profile", component: Profile },
};

const Routes = () => (
  <Router>
    <Stack hideNavBar key="root">
      {Object.entries(routeConfigs).map(([key, config]) => {
        const { component, initial = false } = config;
        return <Scene key={key} component={component} intial={initial} />;
      })}
    </Stack>
  </Router>
);
export default Routes;
