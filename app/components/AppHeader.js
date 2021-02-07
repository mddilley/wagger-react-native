import React from "react";
import { Actions } from "react-native-router-flux";
import { Button, Header, Icon, Text } from "react-native-magnus";
import { textColors } from "../styles/colors";
import { routesConfig } from "../routes/routes";

const appHeaderStyles = {
  iconSize: "5xl",
};

const AppHeader = () => {
  const currentSceneKey = Actions.currentScene;
  const sceneTitle = routesConfig[currentSceneKey].title;

  const handleProfilePress = () => Actions.profile();

  const handleBackPress = () => Actions.pop();

  return (
    <Header
      p="lg"
      borderBottomWidth={1}
      borderBottomColor="gray200"
      alignment="center"
      prefix={
        <Button bg="transparent" onPress={handleBackPress}>
          <Icon
            name="arrow-left"
            fontFamily="Feather"
            color={textColors.secondary}
            fontSize={appHeaderStyles.iconSize}
          />
        </Button>
      }
      suffix={
        <Button bg="transparent" onPress={handleProfilePress}>
          <Icon
            name="user"
            fontFamily="Feather"
            color={textColors.secondary}
            fontSize={appHeaderStyles.iconSize}
          />
        </Button>
      }
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textTransform="uppercase"
        color={textColors.main}
        letterSpacing={1}
      >
        {sceneTitle}
      </Text>
    </Header>
  );
};

export default AppHeader;
