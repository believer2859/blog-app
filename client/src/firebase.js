// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-9d5b6.firebaseapp.com',
  projectId: 'mern-blog-9d5b6',
  storageBucket: 'mern-blog-9d5b6.appspot.com',
  messagingSenderId: '629939942303',
  appId: '1:629939942303:web:99d924e22739d1924f03aa',
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

