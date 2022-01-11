// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuFdd3WHErVokaiQ5N5oHRdz6jvLKJ8zU',
  authDomain: 'instagram-clone-6d2a6.firebaseapp.com',
  projectId: 'instagram-clone-6d2a6',
  storageBucket: 'instagram-clone-6d2a6.appspot.com',
  messagingSenderId: '206280790450',
  appId: '1:206280790450:web:900f92ea22ee7f371154ab',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
