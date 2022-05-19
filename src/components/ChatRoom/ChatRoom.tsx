import "./styles/ChatRoom.css";
import {
  collection,
  DocumentData,
  Firestore,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";
import ChatMessage from "../ChatMessage/ChatMessage";
import { Auth } from "firebase/auth";

interface ChatRoomProps {
  db: Firestore;
  auth: Auth;
}

function ChatRoom(props: ChatRoomProps) {
  let messagesRef = collection(props.db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(q);

  return (
    <>
      <div className="chatRoom">
        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              currentUserID={props.auth.currentUser?.uid}
            />
          ))}
      </div>
    </>
  );
}

export default ChatRoom;
