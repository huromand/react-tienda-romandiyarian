// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNYw0A7Ih2fVKn1Cbk4yNh03lolNu4L_M",
  authDomain: "robotitos-tienda.firebaseapp.com",
  projectId: "robotitos-tienda",
  storageBucket: "robotitos-tienda.appspot.com",
  messagingSenderId: "294794993063",
  appId: "1:294794993063:web:313e2f07ec2aeaf991ea82",
  measurementId: "G-ER9N4C8EQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
