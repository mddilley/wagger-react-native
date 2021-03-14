import React from "react";
import { Div, Icon, Text, Button } from "react-native-magnus";
import { messages } from "../content/messages";
import { colors } from "../styles/colors";
import { handleNavPress } from "../nav/navHandlers";

const Home = () => {
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
            {messages.home.welcome}
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
            {messages.home.missingUserInfo}
          </Text>
          <Div>
            <Button
              bg={colors.main}
              my="lg"
              px="lg"
              py="lg"
              fontSize="lg"
              onPress={() => handleNavPress("profile")}
            >
              Let's do it! 👍
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
