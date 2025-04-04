import { signUp, login, logout, authStateListener } from "./auth.js";

// DOM Elements
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupBtn = document.getElementById("signup-btn");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

const logoutBtn = document.getElementById("logout-btn");
const userInfo = document.getElementById("user-info");

// Signup Event
signupBtn.addEventListener("click", async () => {
    const email = signupEmail.value;
    const password = signupPassword.value;
    const user = await signUp(email, password);
    if (user) alert("Signup successful!");
});

// Login Event
loginBtn.addEventListener("click", async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
    const user = await login(email, password);
    if (user) alert("Login successful!");
});

// Logout Event
logoutBtn.addEventListener("click", async () => {
    await logout();
    alert("Logged out!");
});

// Track User Authentication State
authStateListener((user) => {
    if (user) {
        userInfo.textContent = `Logged in as: ${user.email}`;
        logoutBtn.style.display = "block";
    } else {
        userInfo.textContent = "";
        logoutBtn.style.display = "none";
    }
});
