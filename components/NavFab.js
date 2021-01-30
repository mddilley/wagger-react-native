import React from "react";
import { Actions } from "react-native-router-flux";
import { Button, Fab, Icon, Text } from "react-native-magnus";
import { textColors } from "../styles/colors";

const appHeaderStyles = {
  iconSize: "2xl",
};

const NavFab = () => (
  <Fab bg={textColors.header} h={50} w={50}>
    <Button
      mt="lg"
      px="xl"
      py="lg"
      bg={textColors.header}
      color="white"
      suffix={
        <Icon
          name="arrowright"
          ml="md"
          fontSize={appHeaderStyles.iconSize}
          color="white"
        />
      }
    >
      <Text fontSize="xl" color="white" fontWeight="bold">
        Find a Playdate 😊
      </Text>
    </Button>
  </Fab>
);

export default NavFab;
