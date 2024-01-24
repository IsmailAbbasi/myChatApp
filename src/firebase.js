import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn4Es5z344wPzWKNJzYyw4dmuxjHhEhEg",
  authDomain: "mychatapp-cee47.firebaseapp.com",
  projectId: "mychatapp-cee47",
  storageBucket: "mychatapp-cee47.appspot.com",
  messagingSenderId: "608227217570",
  appId: "1:608227217570:web:bb1778bee2226d2c7907fb"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()