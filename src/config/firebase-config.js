import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBebdf6wkVa8m-AFWiO077mw98w4IE26aY",
    authDomain: "admin2-d8798.firebaseapp.com",
    projectId: "admin2-d8798",
    storageBucket: "admin2-d8798.appspot.com",
    messagingSenderId: "754047538618",
    appId: "1:754047538618:web:45c551ae96325418c4b983",
    measurementId: "G-8JGNTGNHX2"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const storage = getStorage(app)
export const db = getFirestore(app)