import "../index.css";
// import ninjavideo from "../images/ninjavideo.mp4";

const Hero = () => {
  return (
    <>
      <div className="hero-color">
        <div id="home" className="hero">
          <div className="content">
            <h1>
              Learn English <br /> Speaking The <br /> Fastest Way
            </h1>
            <div className="text">
              <div className="icon"></div>
              <div className="heading">
                <p>
                  {" "}
                  Practice English With ARYA - The Smartest A.I. English Tutor
                </p>
              </div>
            </div>
            <div className="text">
              <div className="icon"></div>
              <div className="heading">
                <p>
                  <span className="cut">₹200/Month</span>{" "}
                  <span className="bold-heading">Free*</span> <br /> *Limited Time Offer
                  for Early Users Only
                </p>
              </div>
            </div>

            <div className="playStoteBtn">
              <a
                href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&utm_source=Website"
                target="_blanck"
                className="playstore"
              >
                <img src={require("../images/playstore-logo.png")} alt="" />
                <div>
                  <p>GET IT ON</p>
                  <h3>Google Play</h3>
                </div>
              </a>
            </div>

          </div>
          <div className="image">
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

