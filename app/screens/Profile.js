import React, { useRef, useState } from "react";
import { format } from "date-fns";
import { useQuery } from "@apollo/client";
import { useForm, Controller } from "react-hook-form";
import { GET_USER } from "../queries/users";
import { Auth } from "aws-amplify";
import { useUserSession } from "../auth/userSession";
import { Button, Div, Icon, Input, Select, Text } from "react-native-magnus";
import Loader from "../components/Loader";
import { colors } from "../styles/colors";
import { US_STATES } from "../content/unitedStates";

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("Error signing out: ", error);
  }
};

const Profile = () => {
  const { getUserJwt, getUserEmail } = useUserSession();
  const email = getUserEmail();

  const { loading, error, data } = useQuery(GET_USER, { variables: { email } });
  const user = data?.Users?.[0];

  const { handleSubmit, control, errors, setValue, getValues } = useForm({
    defaultValues: user,
  });

  // Get JWT for connection testing
  console.log(getUserJwt());

  const selectRef = React.createRef();

  console.log(selectRef);

  return loading ? (
    <Loader />
  ) : (
    <Div m="lg" p="xl">
      <Div row mt="lg">
        <Icon fontFamily="MaterialIcons" name="email" fontSize="3xl" />
        <Text ml="lg">{user.email}</Text>
      </Div>
      <Div row mt="lg">
        <Icon fontFamily="Feather" name="calendar" fontSize="3xl" />
        <Text ml="lg">
          You joined on {format(new Date(user.join_date), "MMMM d, yyyy  🎉")}
        </Text>
      </Div>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="First Name"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
          />
        )}
        name="first_name"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="Last Name"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
          />
        )}
        name="first_name"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="Age"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
          />
        )}
        name="age"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="City"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
          />
        )}
        name="city"
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="State"
            // onBlur={onBlur}
            onFocus={() => {
              if (selectRef.current) {
                selectRef.current.open();
              }
            }}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={getValues("state")}
          />
        )}
        name="states"
        defaultValue=""
      />
      <Select
        onSelect={() => setValue("states", "test")}
        ref={selectRef}
        value={getValues("state")}
        title="States"
        mt="md"
        pb="2xl"
        message="Select your state"
        roundedTop="xl"
        data={[1, 2, 3]}
        renderItem={(item) => (
          <Select.Option value={item} py="md" px="xl">
            <Text>{item}</Text>
          </Select.Option>
        )}
      />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            mt="xl"
            py="lg"
            placeholder="About"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            autoCorrect={false}
            value={value}
          />
        )}
        name="about"
        defaultValue=""
      />

      <Button
        bg={colors.danger}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        onPress={signOut}
      >
        Sign out
      </Button>
    </Div>
  );
};

export default Profile;
