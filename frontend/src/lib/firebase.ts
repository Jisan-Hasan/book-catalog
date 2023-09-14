import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpXXseEtM52kBkhcsPNfS-oI8kvPmUNSo',
  authDomain: 'technet-fc60f.firebaseapp.com',
  projectId: 'technet-fc60f',
  storageBucket: 'technet-fc60f.appspot.com',
  messagingSenderId: '511995291471',
  appId: '1:511995291471:web:0e98515fca34e2b2b4073a',
  measurementId: 'G-ZSVZD6RDHR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
