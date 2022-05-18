import { Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "./styles/SignIn.css";

interface SignInProps {
  auth: Auth;
}

function SignIn(props: SignInProps) {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(props.auth, provider);
  };

  return (
    <button className="signIn" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default SignIn;
