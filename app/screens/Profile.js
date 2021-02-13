import React from "react";
import { Text } from "react-native";
import { Auth } from "aws-amplify";

const signOut = () => Auth.signOut();

const Preferences = () => <Text onPress={signOut}>Sign Out</Text>;

export default Preferences;
