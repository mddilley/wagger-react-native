import React from "react";
import OrDivider from "./OrDivider";
import { Auth } from "aws-amplify";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import { handleNavPress } from "../nav/navHandlers";
import { Actions } from "react-native-router-flux";

const schema = yup.object().shape({
  confirmCode: yup.string().required(),
});

const CustomSignup = () => {
  //   const { handleSubmit, control, errors } = useForm({
  //     resolver: yupResolver(schema),
  //   });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Div m="lg" px="xl">
      <Text color="gray500" mt="sm"></Text>
      {/* <Controller
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
      <InputErrorText errors={errors?.email} /> */}
      <Button bg={colors.main} block py="lg" my="xl" px="lg" fontSize="lg">
        <Text
          color={colors.white}
          fontSize="lg"
          fontWeight="bold"
          loading={isLoading}
        >
          Confirm
        </Text>
      </Button>
    </Div>
  );
};

export default CustomSignup;
