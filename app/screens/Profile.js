import React from "react";
import { Auth } from "aws-amplify";
import { useUserSession } from "../auth/userSession";
import { Button, Div, Icon } from "react-native-magnus";
import { colors } from "../styles/colors";

const signOut = async () => {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("Error signing out: ", error);
  }
};

const Preferences = () => {
  const { getUserToken } = useUserSession();

  console.log(getUserToken());

  return (
    <Div m="lg" p="xl">
      <Button
        bg={colors.danger}
        block
        py="lg"
        my="xl"
        px="lg"
        fontSize="lg"
        onPress={signOut}
        suffix={
          <Icon
            ml="md"
            fontFamily="MaterialCommunityIcons"
            name="logout"
            fontSize="3xl"
            color={colors.white}
          />
        }
      >
        Sign out
      </Button>
    </Div>
  );
};

export default Preferences;
