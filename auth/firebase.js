import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6iJAhdANBk8hFcbzRP8Z-xFKMVC0BQ9c",
    authDomain: "social-media-app-7bf31.firebaseapp.com",
    projectId: "social-media-app-7bf31",
    storageBucket: "social-media-app-7bf31.firebasestorage.app",
    messagingSenderId: "767336274069",
    appId: "1:767336274069:web:03ee9b41a10362e73be39c",
    measurementId: "G-65C8C87Z4Y"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // added those 2 lines
  const auth = getAuth(app);

  export default auth