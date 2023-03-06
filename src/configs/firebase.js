import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDG1QV3aNGcWvIjFMOet5CZ2iFDderRze8',
  authDomain: 'dashboard-b4ebd.firebaseapp.com',
  projectId: 'dashboard-b4ebd',
  storageBucket: 'dashboard-b4ebd.appspot.com',
  messagingSenderId: '941818536309',
  appId: '1:941818536309:web:c8de657a32110e7c42f33c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
