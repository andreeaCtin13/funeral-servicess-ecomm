import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKerrctjUwyommG9PYz8OoHufL_2iYVDs",
  authDomain: "noctis-8cc4d.firebaseapp.com",
  projectId: "noctis-8cc4d",
  storageBucket: "noctis-8cc4d.firebasestorage.app",
  messagingSenderId: "1050997768616",
  appId: "1:1050997768616:web:6a371f870c81a69641dd9d",
  measurementId: "G-MB51K1P0Y0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
