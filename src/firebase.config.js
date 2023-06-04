
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCX7DDxRz81VKF89SbNxI34azCzVs_en3I",
    authDomain: "maltimart-661bb.firebaseapp.com",
    projectId: "maltimart-661bb",
    storageBucket: "maltimart-661bb.appspot.com",
    messagingSenderId: "206217412804",
    appId: "1:206217412804:web:b14c659132148df8ff4991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;