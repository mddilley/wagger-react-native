import React, { useState } from "react";
import AuthButton from "./authComponents/AuthButton";
import OrDivider from "./authComponents/OrDivider";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordValidation } from "../auth/validation";
import { Auth } from "aws-amplify";
import { Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { handleNavPress } from "../nav/navHandlers";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: passwordValidation,
});

const CustomLogin = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

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
    </Div>
  );
};

export default CustomLogin;
