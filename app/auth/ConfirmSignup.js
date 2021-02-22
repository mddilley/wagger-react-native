import React from "react";
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
  console.log("Confirm view", username);
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

    confirmSignup(email, confirmCode);
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
        name="confirmCode"
        defaultValue=""
      />
      <InputErrorText errors={errors?.confirmCode} />
      <Button bg={colors.main} block py="lg" my="xl" px="lg" fontSize="lg">
        <Text
          color={colors.white}
          fontSize="lg"
          fontWeight="bold"
          loading={isLoading}
          onPress={handleSubmit(onSubmit)}
        >
          Confirm Signup
        </Text>
      </Button>
    </Div>
  );
};

export default CustomSignup;
