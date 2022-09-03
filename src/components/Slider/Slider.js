import React from 'react'
import "./slider.css"
import "../../components/Navbar/navbar.css"


const Slider = () => {
    return (
        <>
            <div className="sliderWrap">
            <div className="faq-heading">The New Way to Learn
                English Speaking 😃</div>
            <div className="slider">
                <div className="slide">
                    <i class="fa-solid fa-arrow-left-long"></i>
                    <img src={require('../../images/app1.png')} alt="" />
                    <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div className="sliderContent">
                    <div className='point'>
                        <i class="fa-solid fa-hand-point-right"></i>
                        <h4>BUILD CONFIDENCE</h4>
                    </div>
                    <p>Gain confidence by practicing speaking in a safe, nonjudgmental environment. </p>

                    <div className='point'>
                        <i class="fa-solid fa-hand-point-right"></i>
                        <h4> PRACTICE ENGLISH</h4>
                    </div>
                    <p>You can practice English communication on any topic you wish.</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Slider