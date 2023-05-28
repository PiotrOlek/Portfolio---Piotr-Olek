// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtY_gakYqEeQJ_IADqIK-Ngey_tnx5FwY",
  authDomain: "todoapp-5193f.firebaseapp.com",
  projectId: "todoapp-5193f",
  storageBucket: "todoapp-5193f.appspot.com",
  messagingSenderId: "506806206886",
  appId: "1:506806206886:web:0e5b5720eca5d4fd79cf67",
  measurementId: "G-CSCGBN8EH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)