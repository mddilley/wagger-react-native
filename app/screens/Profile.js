import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../queries/users";
import { Auth } from "aws-amplify";
import { useUserSession } from "../auth/userSession";
import { Button, Div } from "react-native-magnus";
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
  const { getUserJwt } = useUserSession();

  const { loading, error, data } = useQuery(GET_USERS);

  console.log(getUserJwt(), data);

  return loading ? (
    <Loader />
  ) : (
    <Div m="lg" p="xl">
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
