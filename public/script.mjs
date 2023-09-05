import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_ECy5EHQyDDSRtcg5Z-vpSeTH0YyXAj4",
    authDomain: "trafficlights-2cfe7.firebaseapp.com",
    databaseURL: "https://trafficlights-2cfe7-default-rtdb.firebaseio.com",
    projectId: "trafficlights-2cfe7",
    storageBucket: "trafficlights-2cfe7.appspot.com",
    messagingSenderId: "1048017366315",
    appId: "1:1048017366315:web:bb99150e6c3129ea48696e",
    measurementId: "G-Z5Z5L5SVT1"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Sign in anonymously
// Sign in anonymously (you should handle authentication in a more secure way)
signInAnonymously(getAuth(app))
    .then((userCredential) => {
        // You can access the user's ID here
        const user = userCredential.user;
        console.log("Anonymous user ID:", user.uid);
    })
    .catch((error) => {
        console.error("Anonymous sign-in error:", error);
    });



// Functions to send data to Realtime Database
export function LED_RED() {
    set(ref(database, "light/"), {
        light: "RED"
    });
    
}

export function LED_BLUE() {
    set(ref(database, "light/"), {
        light: "BLUE"
    });
}

export function LED_GREEN() {
    set(ref(database, "light/"), {
        light: "GREEN"
    });
}

export function LED_OFF() {
    set(ref(database, "light/"), {
        light: "OFF"
    });
}