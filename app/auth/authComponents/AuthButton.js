import React from "react";
import { Button, Text } from "react-native-magnus";
import { colors } from "../../styles/colors";

const AuthButton = ({ onPress, text, isLoading = null }) => (
  <Button
    bg={colors.main}
    block
    py="lg"
    my="xl"
    px="lg"
    onPress={onPress}
    loading={isLoading}
  >
    <Text color={colors.white} fontSize="lg" fontWeight="bold">
      {text}
    </Text>
  </Button>
);

export default AuthButton;
