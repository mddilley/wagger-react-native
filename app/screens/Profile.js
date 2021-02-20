import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/users";
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
  const userEmail = getUserEmail();

  const { loading, error, data } = useQuery(GET_USERS);

  // Get JWT for connection testing
  console.log(getUserJwt());

  return true ? (
    <Loader />
  ) : (
    <Div m="lg" p="xl">
      <Text>{userEmail}</Text>
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
