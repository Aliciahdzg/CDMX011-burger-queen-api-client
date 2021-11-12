import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJimrWVkWLscFHopBL2mFAxlRCRp4hq80',
  authDomain: 'burger-queen-70a0a.firebaseapp.com',
  projectId: 'burger-queen-70a0a',
  storageBucket: 'burger-queen-70a0a.appspot.com',
  messagingSenderId: '480508429872',
  appId: '1:480508429872:web:4fe90bed72ebb065198ff5'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
