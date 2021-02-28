import React from "react";
import MyDogsItem from "./MyDogsItem";
import { Div } from "react-native-magnus";

const MyDogs = () => (
  <Div>
    <Div m="xl" row>
      <MyDogsItem
        name={"Benjamin"}
        age={"12"}
        sex={"Male"}
        details={"The goodest boy"}
      />
    </Div>
  </Div>
);

export default MyDogs;
