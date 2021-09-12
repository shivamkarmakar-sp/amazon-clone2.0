const firebaseConfig = {
  apiKey: "AIzaSyDPidxK6gAJKd1i4mQCUlrYf8NxVnOixHQ",
  authDomain: "clone-2-0-44cee.firebaseapp.com",
  projectId: "clone-2-0-44cee",
  storageBucket: "clone-2-0-44cee.appspot.com",
  messagingSenderId: "424015377509",
  appId: "1:424015377509:web:4753ac7e8ea31c58d5c28c",
  measurementId: "G-29VPBEEG7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();