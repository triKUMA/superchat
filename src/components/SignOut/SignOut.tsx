import "./styles/SignOut.css";
import { Auth } from "firebase/auth";

interface SignOutProps {
  auth: Auth;
}

function SignOut(props: SignOutProps) {
  return (
    props.auth.currentUser && (
      <button className="signOut" onClick={() => props.auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
