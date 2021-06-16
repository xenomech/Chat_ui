import { useState } from "react";
import { MdClear } from "react-icons/md";
import "./chat.css";
import img from "../../assets/Sparrow Bird.png";
import { ChatBox } from "./Chatbox";
const Chat = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      {isOpen ? <ChatBox /> : null}
      <div
        className="chat-icon"
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        {isOpen ? <MdClear className="icon" size="2rem" /> : <img className="icon" src={img} alt="icon" />}
      </div>
    </div>
  );
};

export default Chat;
