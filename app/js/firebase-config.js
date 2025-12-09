import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNzy5tUgXTKXLs2w0h-JA9InU9Wx_tB8Q",
    authDomain: "hitchhiking-app-26c48.firebaseapp.com",
    databaseURL: "https://hitchhiking-app-26c48-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hitchhiking-app-26c48",
    storageBucket: "hitchhiking-app-26c48.firebasestorage.app",
    messagingSenderId: "961805723558",
    appId: "1:961805723558:web:354a3679a5642f830c5167",
    measurementId: "G-GYKY0GB6Z3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, analytics, storage };
