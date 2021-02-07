import React from "react";
import { Router, Scene } from "react-native-router-flux";
import AppHeader from "../components/AppHeader";
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
    iconFontFamily: "Feather",
    icon: "home",
  },
  myPlaydates: {
    title: "My Playdates",
    component: MyPlaydates,
    navText: "My playdates",
    isFab: true,
    iconFontFamily: "Feather",
    icon: "calendar",
  },
  allPlaydates: {
    title: "Playdates",
    component: AllPlaydates,
    navText: "Find playdates",
    isFab: true,
    iconFontFamily: "Feather",
    icon: "search",
  },
  pastPlaydates: {
    title: "Past Playdates",
    component: PastPlaydates,
    navText: "Past playdates",
    isFab: true,
    iconFontFamily: "FontAwesome5",
    icon: "history",
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
    <Scene navBar={AppHeader} key="root">
      {Object.entries(routesConfig).map(([key, config]) => {
        const { component, initial = false } = config;

        return <Scene key={key} component={component} intial={initial} />;
      })}
    </Scene>
  </Router>
);
export default Routes;
