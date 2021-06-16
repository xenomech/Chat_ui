import { useState } from "react";
import { Items } from "./Items";
import { MdMenu, MdClear } from "react-icons/md";

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
          {isClicked ? <MdClear /> : <MdMenu />}
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
