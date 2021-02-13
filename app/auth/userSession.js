import { useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

export const useUserSession = () => {
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

  return { user };
};
