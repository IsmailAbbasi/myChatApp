import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZ_QqOwuNkER9eviZDgB8M5fiRK89ZmpI",
  authDomain: "chats-5d112.firebaseapp.com",
  projectId: "chats-5d112",
  storageBucket: "chats-5d112.appspot.com",
  messagingSenderId: "797198793003",
  appId: "1:797198793003:web:3ab5e814db272a9b286d6e",
  measurementId: "G-YN13VB0542"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

