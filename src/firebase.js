import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4jmJzGS3dTp9wJqPFCf38P03iUD56mls",
  authDomain: "chatapp-f17f9.firebaseapp.com",
  projectId: "chatapp-f17f9",
  storageBucket: "chatapp-f17f9.appspot.com",
  messagingSenderId: "464527049120",
  appId: "1:464527049120:web:ca697ade2af41005a1a4c5"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()