import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMgviSjsCZJ8kEqC_1eoasME5trBnazYE",
  authDomain: "clean-sweep-97ebc.firebaseapp.com",
  projectId: "clean-sweep-97ebc",
  storageBucket: "clean-sweep-97ebc.appspot.com",
  messagingSenderId: "404989892096",
  appId: "1:404989892096:web:451b152aa1f58ecf436ae5"
};

firebase.initializeApp(firebaseConfig);
export default firebase;