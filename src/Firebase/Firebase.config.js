// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANIlVRsMMNW_nyXx4SetN3veD60J6ya7g",
    authDomain: "book-library-1b0bc.firebaseapp.com",
    projectId: "book-library-1b0bc",
    storageBucket: "book-library-1b0bc.appspot.com",
    messagingSenderId: "856425820680",
    appId: "1:856425820680:web:6dbad03287526f3bbc17bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;