import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNZwb2Fm7CJ6KtQ68eE2gA3Evp4Q8JCkU",
  authDomain: "art-auth-app.firebaseapp.com",
  projectId: "art-auth-app",
  storageBucket: "art-auth-app.firebasestorage.app",
  messagingSenderId: "826434912610",
  appId: "1:826434912610:web:89d85adeaced5e4d766c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
