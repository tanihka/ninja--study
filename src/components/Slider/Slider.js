import React from 'react'
import "./slider.css"
import "../../components/Navbar/navbar.css"
import public1 from '../../videos/public1.mp4'
import public3 from '../../videos/public3.mp4'
import public4 from '../../videos/public4.mp4'


const Slider = () => {
    return (
        <>
            <div className="round">
            <div className="faq-heading">The New Way to Learn
                English Speaking 😃</div>
            <div className='glide'>
                <div className='glides'>
                    
                    <video src={public1} autoPlay loop muted/>
                </div>
                <div className='glides'>
                  
                    <video src={public3} autoPlay loop muted/>
                </div>
                <div className='glides'>
                   
                    <video src={public4} autoPlay loop muted/>
                </div>
            </div>
            </div>
        </>
    )
}

export default Slider
