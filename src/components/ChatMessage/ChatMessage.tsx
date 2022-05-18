import { DocumentData } from "firebase/firestore";
import "./styles/ChatMessage.css";

interface ChatMessageProps {
  key: number;
  message: DocumentData;
}

function ChatMessage(props: ChatMessageProps) {
  const { text, uid } = props.message;

  return <p className="chatMessage">{text}</p>;
}

export default ChatMessage;
