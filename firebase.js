import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLS9U5B1Z1TtLQkM_g20syg2I3JBn7DCo",
  authDomain: "flashcard-saas-27561.firebaseapp.com",
  projectId: "flashcard-saas-27561",
  storageBucket: "flashcard-saas-27561.appspot.com",
  messagingSenderId: "1059731012690",
  appId: "1:1059731012690:web:00a03d4ed413184e40738b",
  measurementId: "G-T70LQ12ZRD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}