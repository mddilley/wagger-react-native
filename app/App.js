import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Routes from "./routes/routes";
import NavFab from "./components/NavFab";
import { StatusBar, SafeAreaView } from "react-native";
import { ThemeProvider } from "react-native-magnus";

import Amplify from "aws-amplify";
import { Authenticator } from "aws-amplify-react-native";
import { Auth, Hub } from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true,
  },
});

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
  ],
};

export const FlexSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };
    Hub.listen("auth", updateUser); // listen for login/signup events
    updateUser(); // check manually the first time because we won't get a Hub event
    return () => Hub.remove("auth", updateUser); // cleanup
  }, []);

  return (
    <Authenticator hideDefault={true} amplifyConfig={signUpConfig}>
      {user && (
        <ThemeProvider>
          <StatusBar barStyle={"dark-content"} />
          <FlexSafeAreaView>
            <Routes />
            <NavFab />
          </FlexSafeAreaView>
        </ThemeProvider>
      )}
    </Authenticator>
  );
};

export default App;
