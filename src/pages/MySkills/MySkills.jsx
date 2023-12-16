import Rectangle from "../../components/rectangle";
import "./stylesMySkills/mySkills.css";

import logo_html from "./stylesMySkills/logos_html-5.png";
import logo_css from "./stylesMySkills/logos_css-3.png";
import logo_js from "./stylesMySkills/logos_javascript.png";
import logo_react from "./stylesMySkills/logos_react.png";

function MySkills() {
  return (
    <div className="container padding">
      {/* <div className="sub-container"> */}
      <div className="bg-light-dark center-content border  ">
        <Rectangle className="rectangle-img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4371/4371066.png"
            alt=""
            className="icon1"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062357.png"
            alt=""
            className="honesty"
          />
          <img
            src="https://b2965322.smushcdn.com/2965322/wp-content/uploads/2018/10/Convivial-Illustration.png?lossy=1&strip=1&webp=1"
            alt=""
            className=""
          />
          <img
            src="https://cdni.iconscout.com/illustration/free/thumb/free-business-leader-2080772-1753761.png?f=webp"
            alt=""
            className="honesty"
          />
        </Rectangle>
      </div>
      <div className="bg-light-blue center-content border">
        <Rectangle>
          <ul>
            <h6 className="title-blue">Soft Skilss:</h6>
            <br />
            <li>🧠Honesty</li>
            <li>🧠Responsible</li>
            <li>🧠Able</li>
            <li>🧠Leader</li>
            <li>🧠Amicable</li>
          </ul>
        </Rectangle>
      </div>

      <div className="bg-light-blue center-content border">
        <Rectangle>
          <ul>
            <h6 className="title-blue">Web Development:</h6>
            <br />
            <li>👾HTML</li>
            <li>👾Css</li>
            <li>👾JavaScript</li>
            <li>👾React</li>
          </ul>
        </Rectangle>
      </div>
      <div className="bg-light-dark center-content border ">
        <Rectangle className="rectangle-img">
          <img src={logo_html} alt="" className="logo_html" />
          <img src={logo_css} alt="" className="logo_html" />
          <img src={logo_js} alt="" className="logo" />
          <img src={logo_react} alt="" className="logo" />
        </Rectangle>
      </div>
      {/* </div> */}
    </div>
  );
}
      

export default MySkills;
