import React, { useState } from "react";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import images from "../assets/index";

const CustomLogin = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignInPress = () => {
    console.log(email, password);
    console.log(props.authState);
  };

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
      <Text color="gray500" mt="sm"></Text>
      <Input
        mt="sm"
        py="lg"
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        suffix={<Icon fontFamily="MaterialIcons" name="email" fontSize="3xl" />}
      />
      <Input
        mt="xl"
        py="lg"
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
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
        onPress={handleSignInPress}
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
