import { useRef, useEffect, useState } from "react";
import { MdSend } from "react-icons/md";
import img from "../../assets/sparrow favicon.png";
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
  const [count, setCount] = useState(0);
  const ptr = useRef();

  // const fn = async () => {
  //   const response = await fetch("https://api.adviceslip.com/advice");
  //   const data = await response.json();
  //   setChatdata([
  //     ...Chatdata,
  //     {
  //       id: Chatdata.length,
  //       sentby: "server",
  //       msg: data.slip.advice,
  //     },
  //   ]);
  // };
  const addchat = () => {
    if (message !== "") {
      setChatdata([
        ...Chatdata,
        {
          id: Chatdata.length,
          sentby: "client",
          msg: message,
        },
      ]);
      // console.log(Chatdata);
      setCount(count + 1);
      ptr.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (count !== 0) {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) =>
          setChatdata((c) => [
            ...c,
            {
              id: c.length,
              sentby: "server",
              msg: data.slip.advice,
            },
          ])
        );
    }
  }, [count]);
  useEffect(() => {
    if (Chatdata.length >= 4) {
      ptr.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Chatdata]);
  return (
    <div className="chatbox">
      <div className="header">
        <h2> Hi There</h2> <p>Hello Ask Us Anything. Share Your Feedback</p>
      </div>
      {NewConvo ? (
        <div>
          <div className="messagebox">
            {Chatdata.map((i, index) => {
              return (
                <div
                  key={index}
                  className={
                    i.sentby === "server" ? "server-msg" : "client-msg"
                  }
                >
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
          <div className="info">
            <img src={img} alt="ico" className="info-img" />
            <p>we run on surveysparrow</p>
          </div>
          <hr />
          <div className="ip">
            <input
              className="ip-text"
              type="text"
              value={message}
              placeholder="Write a reply....."
              onChange={(e) => {
                setmessage(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.code === "Enter") {
                  addchat();
                  setmessage("")
                }
              }}
            />
            <MdSend className="btn" onClick={addchat} />
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
