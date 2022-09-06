import "../index.css"
import ninjavideo from '../images/ninjavideo.mp4'

const Hero = () => {
    return (
        <>
            <div id="home" className="hero">
                <div className="content">
                    <h1>Your Personal English AI Tutor Friend</h1>
                    <div className='text'>
                        <div className="icon"><i class="fa-solid fa-circle"></i></div>
                        <div className="heading"><p> < span className='bold-heading'>Meet ARYA</span>- Become fluent in English by speaking with her and getting help with grammar, pronunciation, and fluency.</p></div>
                    </div>
                    <div className='text'>
                        <div className="icon"><i class="fa-solid fa-circle"></i></div>
                        <div className="heading"><p><span className='cut'>₹200/Month</span > <span className='bold-heading'>Free </span>Limited Time Offer for the first few users
                        </p>
                        </div>
                    </div>

                    <div className='playStoteBtn'>
                        <a href="https://play.google.com/store/apps/details?id=com.practice.ninja_study&utm_source=Website" target='_blanck' className='playstore'>
                            <img src={require('../images/playstore-logo.png')} alt="" />
                            <div><p>GET IT ON</p>
                                <h3>Google Play</h3>
                            </div>
                        </a>
                    </div>

                    <p className='goodies'>Download it NOW and Get Goodies!</p>

                </div>
                <div className="image">
                <video src={ninjavideo} autoPlay loop muted />

                    {/* <div className="video">
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Hero
