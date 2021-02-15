import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const useUserSession = () => {
  const [user, setUser] = useState(null);

  const getUserEmail = () => user?.attributes?.email;

  useEffect(() => {
    let updateUser = async (authState) => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch {
        setUser(null);
      }
    };

    Hub.listen("auth", updateUser); // Listen for login/signup events

    updateUser(); // Check manually the first time because we won't get a Hub event

    return () => Hub.remove("auth", updateUser); // Cleanup
  }, []);

  return { user, getUserEmail };
};
