import { useState } from "react";
import { Items } from "./Items";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [isClicked, setisClicked] = useState(false);
  return (
    <div className="NavContainer">
      <div className="logo">
        <p>Maxeon</p>
        <div
          className="menu-icon"
          onClick={() => {
            setisClicked(!isClicked);
          }}
        >
          {isClicked ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <ul
        className={
          isClicked ? "Nav-link-container active" : "Nav-link-container"
        }
      >
        {Items.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.class} href={item.url}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
