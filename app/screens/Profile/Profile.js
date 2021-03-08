import React from "react";
import { format } from "date-fns";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../queries/users";
import { Auth } from "aws-amplify";
import { useUserSession } from "../../auth/userSession";
import { Button, Div, Icon, Text } from "react-native-magnus";
import ProfileForm from "./ProfileForm";
import Loader from "../../components/Loader";
import { colors } from "../../styles/colors";

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

  const { loading, data, refetch } = useQuery(GET_USER, {
    variables: { email },
  });
  const user = data?.Users?.[0];

  // Get JWT for connection testing
  console.log(getUserJwt());

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

      <ProfileForm user={user} refetch={refetch} />
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
