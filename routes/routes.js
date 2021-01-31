import React from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Home from "../screens/Home";
import AllPlaydates from "../screens/AllPlaydates";
import MyPlaydates from "../screens/MyPlaydates";
import PastPlaydates from "../screens/PastPlaydates";
import Profile from "../screens/Profile";

export const routesConfig = {
  wagger: {
    title: "Wagger",
    component: Home,
    initial: true,
    navText: "Home",
    isFab: true,
  },
  myPlaydates: {
    title: "My Playdates",
    component: MyPlaydates,
    navText: "Planned playdates",
    isFab: true,
  },
  allPlaydates: {
    title: "Playdates",
    component: AllPlaydates,
    navText: "Find a playdate",
    isFab: true,
  },
  pastPlaydates: {
    title: "Past Playdates",
    component: PastPlaydates,
    navText: "Past playdates",
    isFab: true,
  },
  profile: {
    title: "Profile",
    component: Profile,
    navText: null,
    isFab: false,
  },
};

const Routes = () => (
  <Router>
    <Stack hideNavBar key="root">
      {Object.entries(routesConfig).map(([key, config]) => {
        const { component, initial = false } = config;

        return <Scene key={key} component={component} intial={initial} />;
      })}
    </Stack>
  </Router>
);
export default Routes;
