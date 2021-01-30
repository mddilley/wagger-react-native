import React from "react";
import { Text } from "react-native";
import { Button, Header, Icon } from "react-native-magnus";
import LogOutButton from "./LogOutButton";

const AppHeader = () => (
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
    suffix={<LogOutButton />}
  >
    <Text>Wagger</Text>
  </Header>
);

export default AppHeader;
