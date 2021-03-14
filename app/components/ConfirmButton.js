import React from "react";
import { Button } from "react-native-magnus";

const ConfirmButton = ({ color, text, onPress }) => {
  return (
    <Button bg={color} my="lg" px="lg" py="lg" fontSize="lg" onPress={onPress}>
      {text}
    </Button>
  );
};

export default ConfirmButton;
