import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from "react-native";

const Login = () => {
  const onLoginPress = () => Alert.alert("Login Button pressed");

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 27 }}>Login</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <View style={{ margin: 7 }} />
      <Button onPress={onLoginPress} title="Submit" />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
