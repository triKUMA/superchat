import "./styles/ChatRoom.css";
import {
  collection,
  Firestore,
  limit,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "../ChatMessage/ChatMessage";
import { Auth } from "firebase/auth";
import { FormEvent, useRef, useState } from "react";

interface ChatRoomProps {
  db: Firestore;
  auth: Auth;
}

function ChatRoom(props: ChatRoomProps) {
  const dummy = useRef() as React.MutableRefObject<HTMLDivElement | null>;

  const messagesRef = collection(props.db, "messages");
  const q = query(messagesRef, orderBy("createdAt", "desc"), limit(25));

  const [messages] = useCollectionData(q);

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formValue === "") return;

    const { uid, photoURL } = props.auth.currentUser!;

    addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");

    dummy?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chatRoom">
      <main className="chatRoom-feed">
        <div ref={dummy}></div>

        {messages &&
          messages.map((msg) => (
            <ChatMessage
              key={msg.id}
              message={msg}
              currentUserID={props.auth.currentUser!.uid}
            />
          ))}
      </main>

      <form className="chatRoom-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
