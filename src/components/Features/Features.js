import React from "react";
import "./Features.css";
import "../../components/Navbar/navbar.css";

const Features = () => {
  return (
    <>

      <div className="featuresWrap">
        <h4>Explore Feature</h4>
        <div className="features">
          <div className="feature1">
            <div className="image">
              <img src={require('../../videos/arya.gif')} alt="" />
            </div>
            <div className="content">
              <h1>Just Start Speaking to enhance your fluency</h1>
              <p>Fast deployment with our expert support. Boost you revenue. Reduce
                support operation by over 30%. Fast development with our
                expert support
              </p>
              <div className="list">
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                </ul>
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feature2">
            <div className="feature1 reverse">
              <div className="content">
                <h1>Just Start Speaking to enhance your fluency</h1>
                <p>Fast deployment with our expert support. Boost you revenue. Reduce
                  support operation by over 30%. Fast development with our
                  expert support
                </p>
                <div className="list">
                  <ul className="list-item">
                    <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                    <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  </ul>
                  <ul className="list-item">
                    <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                    <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  </ul>
                </div>
              </div>
              <div className="image">
                <img src={require('../../videos/arya.gif')} alt="" />
              </div>
            </div>
          </div>

          <div className="feature1">
            <div className="image">
              <img src={require('../../videos/arya.gif')} alt="" />
            </div>
            <div className="content">
              <h1>Just Start Speaking to enhance your fluency</h1>
              <p>Fast deployment with our expert support. Boost you revenue. Reduce
                support operation by over 30%. Fast development with our
                expert support
              </p>
              <div className="list">
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                </ul>
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>



    </>
  );
};

export default Features;
