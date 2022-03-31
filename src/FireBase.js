// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpEohrLL-scW54rCW306D554ytTA_rTV8",
  authDomain: "appel-ecommer.firebaseapp.com",
  projectId: "appel-ecommer",
  storageBucket: "appel-ecommer.appspot.com",
  messagingSenderId: "249489318984",
  appId: "1:249489318984:web:ef14aaac2256946a6e647d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)