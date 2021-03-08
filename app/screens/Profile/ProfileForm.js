import React, { useMemo, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../queries/users";
import AuthButton from "../../auth/authComponents/AuthButton";
import { Input } from "react-native-magnus";
import RNPickerSelect from "react-native-picker-select";
import { US_STATES } from "../../content/unitedStates";
import InputErrorText from "../../components/InputErrorText";

const ProfileForm = ({ user, refetch }) => {
  const { handleSubmit, control, errors, setValue } = useForm({
    defaultValues: user,
  });
  const [
    updateUser,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_USER);
  console.log({ user });

  const selectRef = useRef();

  const stateOptions = useMemo(
    () =>
      Object.values(US_STATES).reduce(
        (acc, state) => [...acc, { label: state, value: state }],
        []
      ),
    [US_STATES]
  );

  const onSubmit = (data) => {
    // TODO Require all fields
    updateUser({ variables: { updated_user: data, email: user.email } });
  };

  return (
    <>
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
        name="last_name"
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
        render={({ value }) => (
          <>
            <Input
              mt="xl"
              py="lg"
              placeholder="State"
              onFocus={() => {
                if (selectRef.current) {
                  selectRef.current.togglePicker(true);
                }
              }}
              autoCorrect={false}
              value={value}
            />
            <RNPickerSelect
              ref={selectRef}
              placeholder={{}}
              // Hide the TextInput since we are showing value in Magnus UI input above
              textInputProps={{ style: { height: 0, width: 0 } }}
              onValueChange={(value) => setValue("state", value)}
              items={stateOptions}
              value={value}
            />
          </>
        )}
        name="state"
        defaultValue=""
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
      <AuthButton
        text={"Update"}
        onPress={handleSubmit(onSubmit)}
        isLoading={mutationLoading}
      />
    </>
  );
};

export default ProfileForm;
