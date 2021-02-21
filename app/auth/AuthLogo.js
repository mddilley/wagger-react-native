import React from "react";
import { Div, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import images from "../assets/index";

const AuthLogo = () => (
  <Div bg={colors.white} px="xl" pt="lg">
    <Div
      rounded="md"
      bgImg={images.loginBackground}
      h={300}
      color={colors.main}
      shadow="md"
    >
      <Div
        rounded="md"
        row
        px="md"
        py="md"
        m="lg"
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Div p="md" rounded="md" bg={colors.main} shadow="md" row>
          <Text
            fontSize="6xl"
            px="lg"
            py="md"
            fontWeight="bold"
            textAlign="center"
            color={colors.white}
          >
            Wagger
          </Text>
          <Icon
            fontFamily="MaterialCommunityIcons"
            name="dog-side"
            fontSize="6xl"
            pr="lg"
            color={colors.white}
          />
        </Div>
      </Div>
    </Div>
  </Div>
);

export default AuthLogo;
