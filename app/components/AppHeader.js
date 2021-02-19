import React, { useState, useEffect } from "react";
import { Actions } from "react-native-router-flux";
import { Button, Header, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import { routesConfig } from "../nav/config";
import { handleBackPress, handleNavPress } from "../nav/navHandlers";

const appHeaderStyles = {
  iconSize: "5xl",
};

const AppHeader = () => {
  const [title, setTitle] = useState("");
  const isHomeScene = title === "Wagger";

  useEffect(() => {
    const currentSceneKey = Actions.currentScene;
    const sceneTitle = routesConfig[currentSceneKey].title;

    setTitle(sceneTitle);
  }, [Actions.currentScene]);

  return (
    <Header
      p="lg"
      borderBottomWidth={1}
      borderBottomColor="gray200"
      alignment="center"
      prefix={
        !isHomeScene && (
          <Button bg="transparent" onPress={handleBackPress}>
            <Icon
              name="arrow-left"
              fontFamily="Feather"
              color={colors.secondary}
              fontSize={appHeaderStyles.iconSize}
            />
          </Button>
        )
      }
      suffix={
        <Button bg="transparent" onPress={() => handleNavPress("profile")}>
          <Icon
            name="user"
            fontFamily="Feather"
            color={colors.secondary}
            fontSize={appHeaderStyles.iconSize}
          />
        </Button>
      }
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        textTransform="uppercase"
        color={colors.main}
        letterSpacing={1}
      >
        {title}
      </Text>
    </Header>
  );
};

export default AppHeader;
