// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvD0r0tqD_mfkGw7h2oFS9ZF8ST3ZNmIw",
  authDomain: "instagram-d7af5.firebaseapp.com",
  projectId: "instagram-d7af5",
  storageBucket: "instagram-d7af5.appspot.com",
  messagingSenderId: "405136841940",
  appId: "1:405136841940:web:49a89a4992d72f1d252f41",
  measurementId: "G-RN721RHYX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Function to sign up a new user
export async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Signup error:", error.message);
    alert(error.message);
    return null;
  }
}

// ✅ Function to log in an existing user
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error.message);
    alert(error.message);
    return null;
  }
}

// ✅ Function to log out the user
export async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error.message);
    alert(error.message);
  }
}

// ✅ Function to track authentication state changes
export function authStateListener(callback) {
  onAuthStateChanged(auth, callback);
}
