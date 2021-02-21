import React from "react";
import OrDivider from "./OrDivider";
import { Auth } from "aws-amplify";
import { signIn } from "./CustomLogin";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordValidation } from "../auth/validation";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import { handleNavPress } from "../nav/navHandlers";

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

  const signUp = async (email, password) => {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
      signIn(email, password);
    } catch (error) {
      console.log("error signing up:", error);
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
          Sign Up
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
        onPress={() => handleNavPress("login")}
      >
        <Text color={colors.white} fontSize="lg" fontWeight="bold">
          Login
        </Text>
      </Button>
    </Div>
  );
};

export default CustomSignup;
