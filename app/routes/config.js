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
