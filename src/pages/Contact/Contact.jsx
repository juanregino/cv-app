

import Rectangle from "../../components/rectangle";

import "./stylesContact/contact.css";

import download_logo from "./stylesContact/download-logo.png";

import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";



function Contact() {
  return (
    <div className="view-contact bg-light-blue">
      {/* <div className="sub-container"> */}
      <div className="right">
        <Rectangle className="bg-white button-text center-content border-button pinch">
          <a href="" target="_blank">
            {" "}
            GET IN TOUCH{" "}
          </a>
        </Rectangle>
      </div>
      <div className="center">
        <Rectangle className="bg-light-pink center-content border-button button-light-pink">
          <a href="" className="pinch">
            {" "}
            <BiLogoGmail className="network-icon gmail"/>
          </a>
          <a href="" className="pinch">
            {" "}
            <FaGithub className="network-icon git" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-regino/"
            target="_blank"
            className="pinch"
          >
            {" "}
            <CiLinkedin className="network-icon linkedin"/>
          </a>
          <a href="" className="pinch">
            {" "}
            <FaWhatsapp className="network-icon wpp"/>
          </a>
        </Rectangle>
      </div>

      <div className="left">
        <Rectangle className="bg-blue button-text  center-content border-button pinch">
          <p>
            <a href="">DOWNLOAD MY CV</a>
            <img src={download_logo} alt="" className="download_logo" />
          </p>
        </Rectangle>
      </div>
      {/* </div> */}
    </div>
  );
}
      
      

export default Contact;
