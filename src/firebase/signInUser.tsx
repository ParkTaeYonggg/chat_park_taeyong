import { signInWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "./firebase";

const signInUser = async (email: string, password: string): Promise<User> => {
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      return {} as User;
    });
  return user;
};

export default signInUser;
