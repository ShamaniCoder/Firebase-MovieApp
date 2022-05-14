import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX8fNzvrv9Wi6U6wsEZttJeQYHubgMBko",
  authDomain: "movie-app-2c8e5.firebaseapp.com",
  projectId: "movie-app-2c8e5",
  storageBucket: "movie-app-2c8e5.appspot.com",
  messagingSenderId: "569734264447",
  appId: "1:569734264447:web:f9084ae1f209037768314a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("log out successfully");
};
