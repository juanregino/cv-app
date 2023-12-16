import Rectangle from "../../components/rectangle";
import "./components/stylesHome/home.css";
import Elipse from "./components/elipse";
import jpImg from "./components/stylesHome/jpImg.jpg";
import pointerImg from "./components/stylesHome/Pointer.png";
import { ImageBox } from "../../components/ImageBox/ImageBox";

function HomePage() {
 
  const Img = <img src={jpImg} className="jp-img" ></img>
  const Pointer = <span className="pointer">👾</span>
  // <img src={pointerImg} className="pointer"></img>;
  return (
    <div className="container">
      <div>
        <Rectangle className="rectangele-ligth-blue">
          <div className="text">
            <h5>Hello ! 👋</h5>
            <p>My name is Juan Pablo</p>
            <p>I am a...</p>
          </div>

          <Elipse />
        </Rectangle>
      </div>
      <div className="bg-light-dark home-image-box">
        <ImageBox className="bg-light-blue image-box">
         {Pointer }
          {Img}
          <button>Juan Pablo Regino</button>
        </ImageBox>
      </div>
    </div>
  );
}

export default HomePage;
