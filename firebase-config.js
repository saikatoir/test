// Firebase Configuration for Fone2Cash
const firebaseConfig = {
  apiKey: "AIzaSyCGjt3RsJgbRO7kAs3HS4VVoroo415rFuU",
  authDomain: "fone2cash-prod-2026.firebaseapp.com",
  projectId: "fone2cash-prod-2026",
  storageBucket: "fone2cash-prod-2026.firebasestorage.app",
  messagingSenderId: "44236096656",
  appId: "1:44236096656:web:3f9ec69f1fc0c63ce38415"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
