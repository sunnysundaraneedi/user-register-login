import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyB9UObxYsdWjXWtsMOFQY53WkpbS_xbo",
  authDomain: "user-login-register-7b08b.firebaseapp.com",
  projectId: "user-login-register-7b08b",
  storageBucket: "user-login-register-7b08b.appspot.com",
  messagingSenderId: "694930450629",
  appId: "1:694930450629:web:8698c379eb1da8494328ac",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
