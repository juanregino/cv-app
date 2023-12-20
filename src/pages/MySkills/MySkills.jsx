import Rectangle from "../../components/rectangle";
import "./stylesMySkills/mySkills.css";

import logo_html from "./stylesMySkills/logos_html-5.png";
import logo_css from "./stylesMySkills/logos_css-3.png";
import logo_js from "./stylesMySkills/logos_javascript.png";
import logo_react from "./stylesMySkills/logos_react.png";

function MySkills() {
  return (
    <div className="containerSkills ">
      <div className="bg-light-blue center-content row ">
        <Rectangle className="rectangle-img">
          <h1 className="text-titles">Web Development</h1>
          <div className="column">
            <p className="col">
              {" "}
              <img src={logo_html} alt="no cargo" className="logo_html" />
              Html
            </p>
            <p className="col">
              {" "}
              <img src={logo_css} alt="" className="logo_html" />
              CSS
            </p>
            <p className="col">
              {" "}
              <img src={logo_js} alt="" className="logo" /> JavaScript
            </p>
            <p className="col">
              <img src={logo_react} alt="" className="logo" /> React
            </p>
          </div>
        </Rectangle>
      </div>
      <div className="bg-light-dark center-content  content-dark-skills ">
        <Rectangle className="rectangle-img">
          <h1 className="text-titles">Soft Skills</h1>
          <div className="column">
            <p className="col">
              {" "}
              <img
                src="https://cdn-icons-png.flaticon.com/512/4371/4371066.png"
                alt=""
                className="icon1"
              />
              <span>Responsible</span>
            </p>

            <p className="col">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3062/3062357.png"
                alt=""
                className="honesty"
              />
              <span>Honesty</span>
            </p>

            <p className="col">
              {" "}
              <img
                src="https://b2965322.smushcdn.com/2965322/wp-content/uploads/2018/10/Convivial-Illustration.png?lossy=1&strip=1&webp=1"
                alt=""
                className=""
              />
              <span>Amicable</span>
            </p>

            <p className="col">
              {" "}
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/free-business-leader-2080772-1753761.png?f=webp"
                alt=""
                className="honesty"
              />
              <span>Leader</span>
            </p>
          </div>
        </Rectangle>
      </div>
    </div>
  );
}
      

export default MySkills;
