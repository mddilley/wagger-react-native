import Home from "../screens/Home";
import AllPlaydates from "../screens/AllPlaydates";
import MyDogs from "../screens/Dogs/MyDogs";
import MyPlaydates from "../screens/MyPlaydates";
import PastPlaydates from "../screens/PastPlaydates";
import Profile from "../screens/Profile/Profile";

export const routesConfig = {
  home: {
    title: "Wagger",
    component: Home,
    initial: true,
    navText: "Home",
    isFab: true,
    iconFontFamily: "Feather",
    icon: "home",
  },
  myDogs: {
    title: "My Dogs",
    component: MyDogs,
    navText: "My dogs",
    isFab: true,
    iconFontFamily: "MaterialCommunityIcons",
    icon: "dog-side",
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

const MyTransitionSpec = {
  duration: 0,
};

export const transitionConfig = () => ({
  transitionSpec: MyTransitionSpec,
});
