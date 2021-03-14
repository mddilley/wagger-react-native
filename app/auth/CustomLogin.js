import React, { useState } from "react";
import AuthButton from "./authComponents/AuthButton";
import OrDivider from "./authComponents/OrDivider";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordValidation } from "../auth/validation";
import { Auth } from "aws-amplify";
import { Div, Input, Icon, Modal, Text } from "react-native-magnus";
import { colors } from "../styles/colors";
import ConfirmButton from "../components/ConfirmButton";
import InputErrorText from "../components/InputErrorText";
import { handleNavPress } from "../nav/navHandlers";
import { messages } from "../content/messages";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: passwordValidation,
});

const CustomLogin = ({ isRedirectAfterSignup = false }) => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(
    isRedirectAfterSignup
  );

  const signIn = async ({ email, password }) => {
    setIsLoading(true);
    try {
      await Auth.signIn(email, password);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn({ email, password });
  };

  return (
    <Div m="lg" px="xl">
      <Text color="gray500" mt="sm"></Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="sm"
            py="lg"
            placeholder="Email Address"
            autoCapitalize="none"
            value={value}
            autoCompleteType="email"
            autoCorrect={false}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            suffix={
              <Icon fontFamily="MaterialIcons" name="email" fontSize="3xl" />
            }
          />
        )}
        name="email"
        defaultValue=""
      />
      <InputErrorText errors={errors?.email} />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCompleteType="password"
            autoCorrect={false}
            value={value}
            suffix={
              <Icon fontFamily="MaterialIcons" name="vpn-key" fontSize="3xl" />
            }
          />
        )}
        name="password"
        defaultValue=""
      />
      <InputErrorText errors={errors?.password} />
      <AuthButton
        text={"Log In"}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
      <OrDivider />
      <AuthButton text={"Sign Up"} onPress={() => handleNavPress("signup")} />
      <Modal isVisible={isSignupModalVisible} h="18%">
        <Div
          bg={colors.white}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          rounded="md"
          row
          px="md"
          py="lg"
          m="lg"
        >
          <Text
            fontSize="lg"
            px="xl"
            py="md"
            color={colors.secondary}
            textAlign="center"
          >
            {messages.signup.after}
          </Text>
          <ConfirmButton
            color={colors.main}
            onPress={() => {
              setIsSignupModalVisible(false);
            }}
            text={messages.button.confirm}
          />
        </Div>
      </Modal>
    </Div>
  );
};

export default CustomLogin;
