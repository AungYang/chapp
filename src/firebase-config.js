import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7k6oshuVE3X0oXKPY2nFFxnoU-EcA8V8",
    authDomain: "chappy-2aa1d.firebaseapp.com",
    projectId: "chappy-2aa1d",
    storageBucket: "chappy-2aa1d.appspot.com",
    messagingSenderId: "101783648318",
    appId: "1:101783648318:web:21446feed6263cfc1eb96f",
    measurementId: "G-0PH7WHB0MR"
  };



  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);