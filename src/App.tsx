import "./App.css";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./components/SignIn/SignIn";
import ChatRoom from "./components/ChatRoom/ChatRoom";

const firebaseConfig = {
  apiKey: "AIzaSyB1WQhf9HRhSLmu7X3C1VCt_M5iJrDtKwY",
  authDomain: "superchat-1e2b7.firebaseapp.com",
  projectId: "superchat-1e2b7",
  storageBucket: "superchat-1e2b7.appspot.com",
  messagingSenderId: "85938585094",
  appId: "1:85938585094:web:79482cf245eb7f11e74d87",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header"></header>

      <section>
        {user ? <ChatRoom db={firestore} /> : <SignIn auth={auth} />}
      </section>
    </div>
  );
}

export default App;
