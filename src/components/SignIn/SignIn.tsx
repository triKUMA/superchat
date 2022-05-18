import { GoogleAuthProvider } from "firebase/auth";
import "./styles/SignIn.css";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
  };

  return (
    <button className="signIn" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default SignIn;
