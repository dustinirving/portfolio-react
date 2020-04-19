import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaPhone,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = (props) => {
  return (
    <div style={contactComponent}>
      <h2 style={contactHeader}>Contact Info</h2>
      <ul style={unorderedList}>
        <li>
          <a
            style={contactA}
            href="https://dustinirving.github.io/mypage/docs/resume.pdf"
          >
            <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
              <div stlye={inlineImg}>
                <FaPhone /> (613) 292 4533
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            style={contactA}
            href="mailto:dustin.irving@gmail.com? subject=subject text"
          >
            <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
              <div stlye={inlineImg}>
                <FaEnvelope /> dustin.irving@gmail.com
              </div>
            </IconContext.Provider>
          </a>
        </li>
        <li>
          <a
            style={contactA}
            href="https://dustinirving.github.io/mypage/docs/resume.pdf"
          >
            <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
              <div stlye={inlineImg}>
                <FaFilePdf /> Resume
              </div>
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      <div style={socialMedia}>
        <a
          style={contactA}
          href="https://github.com/dustinirving"
          title="Github"
        >
          <IconContext.Provider value={{ color: "blue", size: "2.75em" }}>
            <div style={socialMediaIcon}>
              <FaGithub />
            </div>
          </IconContext.Provider>
        </a>

        <a
          style={contactA}
          href="https://www.linkedin.com/in/dustin-irving-a92009194/"
        >
          <IconContext.Provider value={{ color: "blue", size: "2.75em" }}>
            <div style={socialMediaIcon}>
              <FaLinkedin />{" "}
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};

// Styling

const contactComponent = {
  height: "40%",
  paddingTop: "22%",
  marginTop: "0",
};

const contactHeader = {
  fontSize: "36px",
  width: "33%",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  marginBottom: "1rem",
};

const unorderedList = {
  listStyle: "none",
  fontSize: "20px",
  width: "33%",
  marginLeft: "auto",
  marginRight: "auto",
};

const contactA = {
  textDecoration: "none",
  color: "black",
};

const socialMedia = {
  width: "18%",
  marginLeft: "auto",
  marginRight: "auto",
};

const socialMediaIcon = {
  display: "inline",
  paddingLeft: "1.5rem",
};

const inlineImg = {
  display: "inline",
  margin: "0 0.125em",
  padding: "0",
  verticalAlign: "baseline",
};

export default Contact;
