import React from "react";
import { Header, Button, Icon } from "react-native-magnus";

const Home = () => (
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
  >
    Wagger
  </Header>
);

export default Home;
