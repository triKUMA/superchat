import { DocumentData } from "firebase/firestore";
import "./styles/ChatMessage.css";

interface ChatMessageProps {
  key: number;
  message: DocumentData;
  currentUserID: string;
}

function ChatMessage(props: ChatMessageProps) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === props.currentUserID ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
