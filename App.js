import React from "react";
import { ScrollView, StatusBar } from "react-native";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <Login />
    </ScrollView>
  );
}
