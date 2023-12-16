

import Rectangle from "../../components/rectangle";

import "./stylesContact/contact.css";
import email_logo from "./stylesContact/email-logo.png";
import git_logo from "./stylesContact/git-logo.png";
import download_logo from "./stylesContact/download-logo.png";
import linkedin_logo from "./stylesContact/linkedin-logo.png";
import logo from "./stylesContact/logo.png";

function Contact() {
  return (
    <div className="view-contact bg-blue">
      {/* <div className="sub-container"> */}
        <div className="right">
          <Rectangle className="bg-white button-text center-content border-button">
            GET IN TOUCH
          </Rectangle>
        </div>
        <div className="center">
          <Rectangle className="bg-light-pink center-content border-button button-light-pink">
            <img src={email_logo} alt="" className="email_logo" />
            <img src={git_logo} alt="" className="git_logo" />
            <img src={linkedin_logo} alt="" className="linkedin_logo" />
            <img src={logo} alt="" className="logo" />
          </Rectangle>
        </div>

        <div className="left">
          <Rectangle className="bg-green button-text  center-content border-button">
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
