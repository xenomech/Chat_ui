import { useRef, useState } from "react";
import { MdSend } from "react-icons/md";
export const ChatBox = () => {
  const [Chatdata, setChatdata] = useState([
    {
      id: 0,
      sentby: "server",
      msg: "Hey how can i help?",
    },
  ]);
  const [NewConvo, setNewConvo] = useState(false);
  const [message, setmessage] = useState("");
  const ptr = useRef();

  const fn = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setChatdata(
          Chatdata.concat({
            id: Chatdata.length,
            sentby: "server",
            msg: data.slip.advice,
          })
        )
      );
  };

  return (
    <div className="chatbox">
      <div className="header">
        <h2> Hi There</h2> <p>Hello Ask Us Anything. ShareYour Feedback</p>
      </div>
      {NewConvo ? (
        <div>
          <div className="messagebox">
            {Chatdata.map((i, index) => {
              return (
                <div className={i.sentby === "server" ? "server-msg" : null}>
                  {i.sentby === "server" ? (
                    <div className="avatar"></div>
                  ) : null}
                  <div
                    className={
                      i.sentby === "server"
                        ? "message-server"
                        : "message-client"
                    }
                    key={index}
                  >
                    {i.msg}
                    <span ref={ptr}></span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setChatdata(
                  Chatdata.concat({
                    id: Chatdata.length,
                    sentby: "client",
                    msg: message,
                  })
                );
                console.log(Chatdata);
                ptr.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <MdSend />
            </button>
          </div>
        </div>
      ) : (
        <div className="startConvo">
          <h2>Start a Conversation</h2>
          <p>The team typically replies in a few miniutes.</p>
          <div
            className="convobtn"
            onClick={() => {
              setNewConvo(true);
            }}
          >
            <p>Start a conversation</p>
            <MdSend />
          </div>
        </div>
      )}
    </div>
  );
};
