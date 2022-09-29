import React from "react";
import "./Features.css";
import "../../components/Navbar/navbar.css";

const Features = () => {
  return (
    <>

      <div className="featuresWrap">
//         <h4>Explore Feature</h4>
       <div className="features">
        <div className="feature1 reverse">
            <div className="image">
              <img src={require('../../videos/arya.gif')} alt="" />
            </div>
            <div className="content">
              <h1>Just Start Speaking to <br/>
enhance your fluency
</h1>
              <p>Develop your English speaking by conversing with Arya for 20 minutes daily.  <br />The A.I tutor will rectify errors in your sentences while responding to you. 
              </p> <br/>
              <div className="list">
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Direct Feedback</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>24/7 Availability</span> </li>
                </ul>
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Varied topics of interest</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Instant replies</span> </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feature2">
          <div className="feature1 ">
            <div className="content">
              <h1>Get help from your <br/>
native language</h1>
              <p>Does a word sound unfamiliar? Sentences can be translated, <br/>
and you can tap on a word to find out what it means
              </p>
              <div className="list">
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Dynamic learning</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Word Meaning</span> </li>
                </ul>
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>One Click Translation</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Native Language Support</span> </li>
                </ul>
              </div>
            </div>
            <div className="image">
              <img src={require('../../videos/arya.gif')} alt="" />
            </div>
          </div>
          </div>

          <div className="feature1 reverse">
            <div className="image">
              <img src={require('../../videos/arya.gif')} alt="" />
            </div>
            <div className="content">
              <h1>Turn your progress <br/>
into rewards</h1>
              <p>Practice Speaking consistently and become Ninja. Every spoken word gives <br/>
you NinjaCoins, which can be redeemed into amazing gifts from NinjaStudy.
              </p>
              <div className="list">
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Redeemable coins</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <span>Surprising goodies</span> </li>
                </ul>
                <ul className="list-item">
                  <li><i class="fa-solid fa-circle"></i> <span>Encouraging consistency</span> </li>
                  <li><i class="fa-solid fa-circle"></i> <spanProgressive learningk</span> </li>
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
