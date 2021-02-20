import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Auth } from "aws-amplify";
import { Button, Div, Input, Icon, Text } from "react-native-magnus";
import InputErrorText from "../components/InputErrorText";
import { colors } from "../styles/colors";
import images from "../assets/index";

const CustomLogin = () => {
  const { handleSubmit, control, touched, errors } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signIn({ email, password });
  };

  const signIn = async ({ email, password }) => {
    try {
      await Auth.signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div m="lg" p="xl">
      <Div
        rounded="md"
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
        rules={{ required: true }}
        defaultValue=""
      />
      <InputErrorText touched={touched?.email} errors={errors?.email} />
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
        rules={{ required: true }}
        defaultValue=""
      />
      <InputErrorText touched={touched?.password} errors={errors?.password} />
      <Button
        bg={colors.main}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        onPress={handleSubmit(onSubmit)}
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
