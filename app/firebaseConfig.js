import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjOaigvGKPIuhnunHKGYQ-A62F9ky2QKk",
  authDomain: "palmcare-9ced2.firebaseapp.com",
  projectId: "palmcare-9ced2",
  storageBucket: "palmcare-9ced2.firebasestorage.app",
  messagingSenderId: "73289391668",
  appId: "1:73289391668:web:b82ee6da8762f0a6423461",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
