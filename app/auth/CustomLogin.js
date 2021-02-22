import React, { useState } from "react";
import OrDivider from "./OrDivider";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordValidation } from "../auth/validation";
import { Auth } from "aws-amplify";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { handleNavPress } from "../nav/navHandlers";
import { colors } from "../styles/colors";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: passwordValidation,
});

const signIn = async ({ email, password }) => {
  try {
    await Auth.signIn(email, password);
  } catch (error) {
    console.log(error);
  }
};

const CustomLogin = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

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
      <Button
        bg={colors.main}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        onPress={handleSubmit(onSubmit)}
      >
        <Text color={colors.white} fontSize="lg" fontWeight="bold">
          Log In
        </Text>
      </Button>
      <OrDivider />
      <Button
        bg={colors.main}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        onPress={() => handleNavPress("signup")}
      >
        <Text color={colors.white} fontSize="lg" fontWeight="bold">
          Sign Up
        </Text>
      </Button>
    </Div>
  );
};

export default CustomLogin;
