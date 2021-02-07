import React from "react";
import { Actions } from "react-native-router-flux";
import { Button, Fab, Icon, Text } from "react-native-magnus";
import { textColors } from "../styles/colors";
import { routesConfig } from "../routes/routes";

const appHeaderStyles = {
  iconSize: "2xl",
};

const NavFab = () => {
  const handleNavPress = (key) => Actions[key]();
  const fabRouteConfigs = Object.entries(routesConfig).reduce(
    (acc, [key, config]) => (config.isFab ? { ...acc, [key]: config } : acc),
    {}
  );

  return (
    <Fab bg={textColors.header} h={50} w={50}>
      {Object.entries(fabRouteConfigs).map(([key, config]) => (
        <Button
          key={key}
          mt="lg"
          py="lg"
          bg={textColors.header}
          color="white"
          prefix={
            config.icon && (
              <Icon
                name={config.icon}
                fontFamily={config.iconFontFamily}
                fontSize={appHeaderStyles.iconSize}
                color="white"
              />
            )
          }
          suffix={
            <Icon
              name="arrowright"
              ml="md"
              fontSize={appHeaderStyles.iconSize}
              color="white"
            />
          }
          onPress={() => handleNavPress(key)}
        >
          <Text fontSize="xl" color="white" fontWeight="bold">
            {"  "}
            {config.navText}
          </Text>
        </Button>
      ))}
    </Fab>
  );
};

export default NavFab;
