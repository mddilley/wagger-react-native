import React from "react";
import { Button, Text } from "react-native-magnus";
import { colors } from "../../styles/colors";

const AuthButton = ({ onPress, text, isLoading }) => (
  <Button
    bg={colors.main}
    block
    py="lg"
    my="xl"
    px="lg"
    fontSize="lg"
    onPress={onPress}
  >
    <Text
      color={colors.white}
      fontSize="lg"
      fontWeight="bold"
      loading={isLoading}
    >
      {text}
    </Text>
  </Button>
);

export default AuthButton;
