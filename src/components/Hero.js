import "../index.css";
import { BsPlayFill} from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="hero-color">
        <div id="home" className="hero">
          <div className="content">
            <h1>
              Learn English <br /> Speaking The <br /> Fastest Way
            </h1>
    <br/>
            <div className="text">
              <div className="icon"></div>
              <div className="heading">
                <p>
                  {" "}
                  Practice English With ARYA - The Smartest A.I. English Tutor
                </p>
              </div>
            </div>

            <div className="btn-player-container">
            <div className="playStoteBtn">
              <a
                href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&utm_source=Website"
                target="_blanck"
                className="playstore"
              >
                <img src={require("../images/googleplayyer.png")} alt="" />
              
              </a>
            </div>
            <div className="play-video">
              <a href="https://youtu.be/eDX-ZXpqJMs" target="blank" className="youtubevideo">
              <BsPlayFill/> <span>Play Video</span>
              </a>
            </div>
            </div>

          </div>
          <div className="image">
            {/* <video src={home} autoPlay loop muted /> */}

<img src={require("../videos/home.gif")} alt="" />
            {/* <div className="video">
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
