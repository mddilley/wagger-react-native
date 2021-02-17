import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { useUserSession } from "./userSession";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import images from "../assets/index";

const CustomLogin = (props) => {
  const { user } = useUserSession();
  const { authState, onStateChange } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInPress = async () => {
    console.log("trying to log in");
    try {
      await Auth.signIn(email, password);
      onStateChange(authState);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
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
        autoCapitalize="none"
        value={email}
        autoCompleteType="email"
        autoCorrect={false}
        onChangeText={(text) => setEmail(text)}
        suffix={<Icon fontFamily="MaterialIcons" name="email" fontSize="3xl" />}
      />
      <Input
        mt="xl"
        py="lg"
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        autoCompleteType="password"
        autoCorrect={false}
        value={password}
        suffix={
          <Icon fontFamily="MaterialIcons" name="vpn-key" fontSize="3xl" />
        }
      />
      <Button
        bg={colors.main}
        block
        py="lg"
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
      <Div mx="xl" alignItems="center" justifyContent="center" flexDir="row">
        <Div h={1} flex={1} bg={colors.light} />
        <Text px="lg" fontSize="lg" color={colors.light}>
          Or
        </Text>
        <Div h={1} flex={1} bg={colors.light} />
      </Div>
    </Div>
  );
};

export default CustomLogin;
