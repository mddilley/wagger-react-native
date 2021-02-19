import { Actions } from "react-native-router-flux";

export const handleNavPress = (routeString) => Actions[routeString]();

export const handleBackPress = () => Actions.pop();
