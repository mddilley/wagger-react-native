import React from "react";
import { Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { Button, Header, Icon } from "react-native-magnus";

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
          <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
        </Button>
      }
      suffix={
        <Button bg="transparent">
          <Icon name="user" fontFamily="Feather" fontSize="2xl" />
        </Button>
      }
    >
      <Text>{viewTitle}</Text>
    </Header>
  );
};

export default AppHeader;
