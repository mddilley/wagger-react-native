import React from "react";
import { useUserSession } from "../auth/userSession";
import { Div, Icon, Text, Button } from "react-native-magnus";
import { colors } from "../styles/colors";

const Home = () => {
  const { user, getUserEmail } = useUserSession();
  console.log(user);

  console.log(getUserEmail());

  return (
    <Div mx="xl" mt="xl" mb="md">
      <Div rounded="xl" h={150} color={colors.main} shadow="md">
        <Div
          bg={colors.main}
          rounded="md"
          row
          px="md"
          py="md"
          m="lg"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Text
            fontSize="xl"
            px="xl"
            py="md"
            fontWeight="bold"
            textAlign="center"
            color={colors.white}
          >
            Connect with others so our fuzzy friends can do what they do best!
          </Text>
          <Div>
            <Text fontSize="3xl">🙌</Text>
          </Div>
        </Div>
      </Div>
      <Div rounded="xl" h={200} color={colors.white} shadow="md">
        <Div
          bg={colors.white}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          rounded="md"
          row
          px="md"
          py="lg"
          m="lg"
        >
          <Text
            fontSize="lg"
            px="xl"
            py="md"
            color={colors.secondary}
            textAlign="center"
          >
            It looks like this is your first rodeo. 🤠 Let's get some details
            that will help match you up and get your dog some new friends!
          </Text>
          <Div>
            <Button
              bg={colors.main}
              my="lg"
              px="lg"
              py="lg"
              fontSize="lg"
              suffix={
                <Icon name="arrowright" ml="md" fontSize="md" color="white" />
              }
            >
              Let's do it
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
