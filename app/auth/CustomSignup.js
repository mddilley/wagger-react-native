import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Auth } from "aws-amplify";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import { handleNavPress } from "../nav/navHandlers";

const CustomSignup = () => {
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
      <InputErrorText errors={errors?.password} /> */}
      <Button
        bg={colors.main}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        // onPress={handleSubmit(onSubmit)}
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
