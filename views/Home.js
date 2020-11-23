const { StatusBar } = require("react-native");

import React from "react";
import { ScrollView, Text } from "react-native";

const Home = () => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <Text>You made it into the app!</Text>
  </ScrollView>
);

export default Home;
