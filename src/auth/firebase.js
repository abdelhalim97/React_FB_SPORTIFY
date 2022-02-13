import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,onAuthStateChanged} from "firebase/auth";
// import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAEQGhimQSqe754dAMZQPAqtshK2J-5Sqw",
  authDomain: "terrain-12486.firebaseapp.com",
  projectId: "terrain-12486",
  storageBucket: "terrain-12486.appspot.com",
  messagingSenderId: "832258486032",
  appId: "1:832258486032:web:ef433d0dd073ce86513f95"
});
export const auth = getAuth(firebaseConfig);
onAuthStateChanged(auth,user=>{
  if(user!==null){
console.log(user)
  }
  else{
    console.log('u r not logged in')
  }
})
// export const db=getFirestore()
