import React from "react";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import images from "../assets/index";
import { color } from "react-native-reanimated";

const CustomLogin = () => {
  // Onpress handlers

  return (
    <Div m="lg" p="xl">
      <Div
        rounded="xl"
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
      <Text mt="2xl" color="gray900" fontWeight="bold" fontSize="2xl">
        Login
      </Text>
      <Text color="gray500" mt="sm"></Text>
      <Input
        mt="sm"
        py="lg"
        placeholder="Email Address"
        autoCapitalize={false}
        suffix={<Icon fontFamily="MaterialIcons" name="email" fontSize="3xl" />}
      />
      <Input
        mt="xl"
        py="lg"
        placeholder="Password"
        secureTextEntry
        suffix={
          <Icon fontFamily="MaterialIcons" name="vpn-key" fontSize="3xl" />
        }
      />
      <Button
        bg={colors.main}
        block
        py="lg"
        bg={colors.main}
        my="xl"
        px="lg"
        fontSize="lg"
      >
        <Icon
          fontFamily="FontAwesome"
          name="check"
          fontSize="3xl"
          color={colors.white}
        />
      </Button>
    </Div>
  );
};

export default CustomLogin;
