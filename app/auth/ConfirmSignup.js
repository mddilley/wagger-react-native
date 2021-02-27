import React, { useState } from "react";
import AuthButton from "./authComponents/AuthButton";
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import { Actions } from "react-native-router-flux";

const schema = yup.object().shape({
  confirmCode: yup.string().min(6).required(),
});

const CustomSignup = ({ username }) => {
  const { handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const confirmSignup = async (username, code) => {
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(username, code).then(() => {
        setIsLoading(false);
        Actions.login();
      });
    } catch (error) {
      console.log("error confirming sign up", error);
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    const { confirmCode } = data;

    confirmSignup(username, confirmCode);
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
            placeholder="Confirmation Code"
            autoCapitalize="none"
            value={value}
            autoCompleteType="email"
            autoCorrect={false}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            suffix={
              <Icon fontFamily="MaterialIcons" name="lock" fontSize="3xl" />
            }
          />
        )}
        name="confirmCode"
        defaultValue=""
      />
      <InputErrorText errors={errors?.confirmCode} />
      <AuthButton
        text={"Confirm Signup"}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
      />
    </Div>
  );
};

export default CustomSignup;
