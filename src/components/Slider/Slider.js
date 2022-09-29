import React from "react";
import "./slider.css";
import "../../components/Navbar/navbar.css";

const Slider = () => {
  return (
    <>
      <div className="glide">
        <div className="glides">
          <div>
          <img src={require('../../videos/arya.gif')} alt="" />
          </div>
          <div className="glidesname">
            <h1>
              Just Start Speaking to <br /> enhance your fluency
            </h1><br />
            <p>
              Fast deployment with our expert support. Boost you revenue. Reduce
              support <br /> operation by over 30%. Fast development with our
              expert support
            </p> <br />
            <div className="glidepoint">
               <div className="row1">
                
                 <ul type="disc">
                    <li>tani jihon  ninkj ii</li>
                    <li>jhhjh</li>
                </ul>
                </div>
               <div className="row2">
                
                 <ul type="disc">
                    <li>tani</li>
                    <li>jhhnjjnnk jbj hb jjjh</li>
                </ul>
                </div>
                
            </div>
          </div>
        </div>
        <div className="glides-no2">
          
          <div className="glidesname-no2">
            <h1>
              Just Start Speaking to <br /> enhance your fluency
            </h1><br />
            <p>
              Fast deployment with our expert support. Boost you revenue. Reduce
              support <br /> operation by over 30%. Fast development with our
              expert support
            </p> <br />
            <div className="glidepoint">
               <div className="row1">
                
                 <ul type="disc">
                    <li>tani jihon  ninkj ii</li>
                    <li>jhhjh</li>
                </ul>
                </div>
               <div className="row2">
                
                 <ul type="disc">
                    <li>tani</li>
                    <li>jhhnjjnnk jbj hb jjjh</li>
                </ul>
                </div>
                
            </div>
          </div>
          <div>
          <img src={require('../../videos/translate.gif')} alt="" />
            
          </div>
        </div>
        <div className="glides">
          <div>
          <img src={require('../../videos/score.gif')} alt="" />
          </div>
          <div className="glidesname">
          <h1>
              Just Start Speaking to <br /> enhance your fluency
            </h1><br />
            <p>
              Fast deployment with our expert support. Boost you revenue. Reduce
              support <br /> operation by over 30%. Fast development with our
              expert support
            </p> <br />
            <div className="glidepoint">
               <div className="row1">
                
                 <ul type="disc">
                    <li>tani jihon  ninkj ii</li>
                    <li>jhhjh</li>
                </ul>
                </div>
               <div className="row2">
                
                 <ul type="disc">
                    <li>tani</li>
                    <li>jhhnjjnnk jbj hb jjjh</li>
                </ul>
                </div>
                
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Slider;
