import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCNuuMzWH3bFS1ACZkx3vP3RPA5IUXXVQ8",
    authDomain: "music-search-app-cdfa8.firebaseapp.com",
    projectId: "music-search-app-cdfa8",
    storageBucket: "music-search-app-cdfa8.appspot.com",
    messagingSenderId: "577625729369",
    appId: "1:577625729369:web:32a4905c2e8e3b3a5bc448",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
