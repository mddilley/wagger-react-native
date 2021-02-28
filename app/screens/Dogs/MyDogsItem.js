import React from "react";
import { Div, Text } from "react-native-magnus";
import { colors } from "../../styles/colors";

const MyDogsItem = ({ name, birthdate, sex, details }) => (
  <Div
    rounded="xl"
    shadow="md"
    h={150}
    flex={1}
    bg={colors.white}
    flexDir="row"
    p="xl"
  >
    <Div row bg={colors.white}>
      <Div justifyContent="center">
        <Div h={100} w={100} bg={colors.main} rounded="xl" shadow="md" />
      </Div>
      <Div justifyContent="flex-start" ml="xl">
        <Text fontSize="xl" fontWeight="bold" color={colors.secondary}>
          {name}
        </Text>
        <Text fontSize="xl" color={colors.secondary}>
          {birthdate} years old
        </Text>
        <Text fontSize="xl" color={colors.secondary}>
          {sex}
        </Text>
        <Text fontSize="xl" color={colors.secondary}>
          {details}
        </Text>
      </Div>
    </Div>
  </Div>
);

export default MyDogsItem;
