import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN4f8Dw4LcOJQ7J8WaQ6eB7JEchKoRu2A",
  authDomain: "reactmovieapp-b301a.firebaseapp.com",
  projectId: "reactmovieapp-b301a",
  storageBucket: "reactmovieapp-b301a.appspot.com",
  messagingSenderId: "1027493718398",
  appId: "1:1027493718398:web:869061dd3acbee63fc2b2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export const createUser = (email, password) =>{
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
  
  }
