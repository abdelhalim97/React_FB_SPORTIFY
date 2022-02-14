import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,onAuthStateChanged} from "firebase/auth";
// import {getFirestore} from "@firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
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
