import React from "react";
import { Div, Text } from "react-native-magnus";
import { colors } from "../styles/colors";

const InputErrorText = ({ errors }) => {
  const message =
    errors &&
    `${errors?.message.slice(0, 1).toUpperCase()}${errors?.message.slice(1)}`;

  return (
    <Div ml="md" h={10}>
      <Div position="absolute" top={0} zIndex={1}>
        <Text color={colors.danger} fontSize="md" mt="sm">
          {message}
        </Text>
      </Div>
    </Div>
  );
};

export default InputErrorText;
