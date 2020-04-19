import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { IconContext } from "react-icons";

// Styling
import "../styling/Sidebar.css";

const Sidebar = props => {
  return (
    <div className="sidebar-items">
      <ul>
        <li>
          <a href="https://github.com/dustinirving" title="Github">
            <IconContext.Provider value={{ color: "black", size: "1.75em" }}>
              <div>
                <FaGithub />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="mailto:dustin.irving@gmail.com? subject=subject text">
            <IconContext.Provider value={{ color: "black", size: "1.75em" }}>
              <div>
                <FaEnvelope />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dustin-irving-a92009194/">
            <IconContext.Provider value={{ color: "black", size: "1.75em" }}>
              <div>
                <FaLinkedin />
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a href="https://dustinirving.github.io/mypage/docs/resume.pdf">
            <IconContext.Provider value={{ color: "black", size: "1.75em" }}>
              <div>
                <FaFilePdf />
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
