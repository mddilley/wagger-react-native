import React from "react";
import { Actions } from "react-native-router-flux";
import { Button, Fab, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import { routesConfig } from "../routes/config";

const appHeaderStyles = {
  iconSize: "2xl",
};

const NavFab = (props) => {
  const handleNavPress = (key) => Actions[key]();

  const fabRouteConfigs = Object.entries(routesConfig).reduce(
    (acc, [key, config]) => (config.isFab ? { ...acc, [key]: config } : acc),
    {}
  );

  return (
    <Fab
      icon={
        <Icon
          fontFamily="Feather"
          name="menu"
          fontSize={appHeaderStyles.iconSize}
          color="white"
        />
      }
      bg={colors.main}
      h={50}
      w={50}
    >
      {Object.entries(fabRouteConfigs).map(([key, config]) => (
        <Button
          key={key}
          mt="lg"
          py="lg"
          bg={colors.main}
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
