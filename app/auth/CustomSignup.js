import React, { useState } from "react";
import AuthButton from "./authComponents/AuthButton";
import OrDivider from "./authComponents/OrDivider";
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordValidation } from "../auth/validation";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import { handleNavPress } from "../nav/navHandlers";
import { Actions } from "react-native-router-flux";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: passwordValidation,
  confirmPassword: passwordValidation.oneOf(
    [yup.ref("password"), null],
    "Passwords must match"
  ),
});

const CustomSignup = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const signUp = async (email, password) => {
    setIsLoading(true);
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      }).then(() => {
        setIsLoading(false);
        Actions.push("confirmSignup", { username: email });
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    const { email, password } = data;

    signUp(email, password);
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
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="Confirm Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
            suffix={
              <Icon fontFamily="MaterialIcons" name="vpn-key" fontSize="3xl" />
            }
          />
        )}
        name="confirmPassword"
        defaultValue=""
      />
      <InputErrorText errors={errors?.confirmPassword} />
      <AuthButton
        text={"Sign Up"}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
      <OrDivider />
      <AuthButton text={"Login"} onPress={() => handleNavPress("login")} />
    </Div>
  );
};

export default CustomSignup;
