import React from "react";
import MyDogsItem from "./MyDogsItem";
import { Div } from "react-native-magnus";

const MyDogs = () => {
  return (
    <Div>
      <Div m="xl" row>
        <MyDogsItem
          name={"Benjamin"}
          birthdate={"2009-01-10"}
          sex={"Male"}
          details={"The goodest boy"}
        />
      </Div>
    </Div>
  );
};

export default MyDogs;
