import React from "react";
import { ActivityIndicator } from "react-native";
import { Div } from "react-native-magnus";

const Loader = () => (
  <Div
    row
    px="md"
    py="md"
    m="lg"
    flex={1}
    justifyContent="center"
    alignItems="center"
    flexDir="column"
  >
    <ActivityIndicator size="large" />
  </Div>
);

export default Loader;
