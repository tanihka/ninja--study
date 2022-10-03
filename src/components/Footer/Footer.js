import "./footer.css";

const footer = () => {
  return (
    <>
      {/* <div className="get-started">
                <h3>Ready To Get Started?</h3>
                <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&utm_source=Website" target="_blank">GET STARTED</a>
            </div> */}
      <footer>
        <div className="footer">
          <div className="office">
            <img src={require("../../images/logos.png")} alt="" />
            <p className="office-content">
              NinjaStudy is a personal AI English tutor App, focused on
              improving your speaking skills. You can think of it as Siri/Alexa
              for English learners.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/ninjastudy/?viewAsMember=true"
                target="_blanck"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/tryninjastudy" target="_blanck">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/tryninjastudy/"
                target="_blanck"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCLWFj6R_ZL5V8XhSK5fc_hg/featured"
                target="_blanck"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="company">
            {" "}
            <h2 className="footer-heading">About Us</h2>
            <a href="/">Mission</a>
            <a href="/">Careers</a>
            <a href="/">Press</a>
            <a href="/">Contact Us</a>
            <a href="/">Investors</a>
          </div>
          <div className="company">
            {" "}
            <h2 className="footer-heading">Help and Support</h2>
            <a href="/">FAQs</a>
            <a href="/">Blog</a>
          </div>
          <div className="company">
            {" "}
            <h2 className="footer-heading">Privacy and terms</h2>
            <a href="/">Community Guidelines</a>
            <a href="/">Terms</a>
            <a href="/">Privacy</a>
          </div>
          {/* <div className="company"> <h2 className="footer-heading">Socials</h2>
                        <a href="/">Blog</a>
                        <a href="/">Twitter</a>
                        <a href="/">Youtube</a>
                        <a href="/">Facebook</a>
                    </div> */}
          {/* <div className="social">
                        <h2 className="footer-heading">Follow Us</h2>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/ninjastudy/?viewAsMember=true" target='_blanck'><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/tryninjastudy" target='_blanck'><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/tryninjastudy/" target='_blanck'><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UCLWFj6R_ZL5V8XhSK5fc_hg/featured" target='_blanck'><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div> */}
          {/* <div className="contact">
                        <h2 className="footer-heading">Contact Us</h2>
                        <a href="mailto:contact@tryninjastudy.com"> contact@tryninjastudy.com</a>
                    </div> */}
        </div>
        <div className="bottom-footer">
            <br />
          <hr />
          <div className="bottom-text">
            <p>
              <a href="mailto:contact@tryninjastudy.com"> Term & Condition</a>
            </p>
            <p className="privacy" >Privacy & Policy</p>
            {/* <div className="social"> */}
            
            {/* </div> */}
            <p>© 2022 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
