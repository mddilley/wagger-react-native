import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/users";
import { Auth } from "aws-amplify";
import { useUserSession } from "../auth/userSession";
import { Button, Div, Text } from "react-native-magnus";
import Loader from "../components/Loader";
import { colors } from "../styles/colors";

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

  // Get JWT for connection testing
  console.log(getUserJwt());

  return loading ? (
    <Loader />
  ) : (
    <Div m="lg" p="xl">
      <Text>{user.email}</Text>
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
