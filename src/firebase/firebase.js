// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgvX1Ab3Lb_D79nBG9GijQzrXZuNyGZt4',
  authDomain: 'e-commerce-website-c05a8.firebaseapp.com',
  projectId: 'e-commerce-website-c05a8',
  storageBucket: 'e-commerce-website-c05a8.appspot.com',
  messagingSenderId: '224853413901',
  appId: '1:224853413901:web:626a69e3fa19d2ff57c544',
  measurementId: 'G-NDLC9V7J3Z'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp)
export default firebaseApp
