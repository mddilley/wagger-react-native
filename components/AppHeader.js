import React from "react";
import { Actions } from "react-native-router-flux";
import { Button, Header, Icon, Text } from "react-native-magnus";
import { textColors } from "../styles/colors";

const appHeaderStyles = {
  iconSize: "5xl",
};

const AppHeader = () => {
  const viewTitle = Actions.currentScene;

  return (
    <Header
      p="lg"
      borderBottomWidth={1}
      borderBottomColor="gray200"
      alignment="center"
      prefix={
        <Button bg="transparent">
          <Icon
            name="arrow-left"
            fontFamily="Feather"
            fontSize={appHeaderStyles.iconSize}
          />
        </Button>
      }
      suffix={
        <Button bg="transparent">
          <Icon
            name="user"
            fontFamily="Feather"
            fontSize={appHeaderStyles.iconSize}
          />
        </Button>
      }
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textTransform="uppercase"
        color={textColors.header}
        letterSpacing={1}
      >
        {viewTitle}
      </Text>
    </Header>
  );
};

export default AppHeader;
