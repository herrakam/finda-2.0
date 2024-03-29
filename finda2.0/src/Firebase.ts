import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyAzkBqlm6vevC7C_FB2R54TRSh-FAWfedg',
//   authDomain: 'finda-2.firebaseapp.com',
//   projectId: 'finda-2',
//   storageBucket: 'finda-2.appspot.com',
//   messagingSenderId: '694738801055',
//   appId: '1:694738801055:web:05e1b9c88006a1dbd42daa',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
