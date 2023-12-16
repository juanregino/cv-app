

import Rectangle from "../../components/rectangle";

import "./stylesContact/contact.css";
import Gmail_logo from "./stylesContact/Gmail-icon.png";
import git_logo from "./stylesContact/git-logo.png";
import download_logo from "./stylesContact/download-logo.png";
import linkedin_logo from "./stylesContact/linkedin-logo.png";
import whatsap_logo from "./stylesContact/whatsapp-icon.png";

function Contact() {
  return (
    <div className="view-contact bg-light-blue">
      {/* <div className="sub-container"> */}
      <div className="right">
        <Rectangle className="bg-white button-text center-content border-button pinch">
          <a href="" target="_blank"> GET IN TOUCH </a>
        </Rectangle>
      </div>
      <div className="center">
        <Rectangle className="bg-light-pink center-content border-button button-light-pink">
          <a href=""  className="pinch">
            {" "}
            <img src={Gmail_logo} alt="Gmail" className="email_logo" />{" "}
          </a>
          <a href="" className="pinch">
            {" "}
            <img src={git_logo} alt="Git Hub" className="git_logo" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/juan-regino/" target="_blank" className="pinch">
            {" "}
            <img
              src={linkedin_logo}
              alt="Linkedin"
              className="linkedin_logo"
            />{" "}
          </a>
          <a href="" className="pinch">
            {" "}
            <img src={whatsap_logo} alt="Whatsapp" className="logo" />{" "}
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
