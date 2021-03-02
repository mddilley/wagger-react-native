import React from "react";
import { useQuery } from "@apollo/client";
import { useUserSession } from "../../auth/userSession";
import MyDogsItem from "./MyDogsItem";
import Loader from "../../components/Loader";
import { Div } from "react-native-magnus";
import { GET_DOGS } from "../../queries/dogs";

const MyDogs = () => {
  const { getUserEmail } = useUserSession();
  const email = getUserEmail();

  const { loading, error, data } = useQuery(GET_DOGS, { variables: { email } });
  const dogs = data?.Dogs;

  return loading ? (
    <Loader />
  ) : (
    <Div>
      {dogs.map((dog) => (
        <Div mt="xl" mx="xl" row>
          <MyDogsItem
            key={dog.id}
            name={dog.name}
            birthdate={dog.birthdate}
            sex={dog.sex}
            weight={dog.weight}
          />
        </Div>
      ))}
    </Div>
  );
};

export default MyDogs;
