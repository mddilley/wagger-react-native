import React from "react";
import { Div, Text } from "react-native-magnus";
import { colors } from "../styles/colors";

const InputErrorText = ({ touched, errors }) => (
  <Div ml="md" h={10}>
    <Div position="absolute" top={0} zIndex={1}>
      <Text color={colors.danger} fontSize="md" mt="sm">
        {/* {touched && errors} */}
        Test
      </Text>
    </Div>
  </Div>
);

export default InputErrorText;
