import React from "react";
import { Div, Text } from "react-native-magnus";
import { colors } from "../../styles/colors";

const OrDivider = () => (
  <Div mx="xl" alignItems="center" justifyContent="center" flexDir="row">
    <Div h={1} flex={1} bg={colors.light} />
    <Text px="lg" fontSize="lg" color={colors.light}>
      Or
    </Text>
    <Div h={1} flex={1} bg={colors.light} />
  </Div>
);

export default OrDivider;
