// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBekxO23dXHRyYAgvw7dM6VRIzM9p5NAUg",
  authDomain: "pingshy-af6a1.firebaseapp.com",
  projectId: "pingshy-af6a1",
  storageBucket: "pingshy-af6a1.firebasestorage.app",
  messagingSenderId: "803080644757",
  appId: "1:803080644757:web:97554fa7e10db722bed39c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth,googleProvider};