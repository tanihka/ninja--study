import React from 'react'

const Form = () => {
  return (
    <><form
    // action="https://formspree.io/f/xgedgjkr"
    method="POST"
    // className="contact-inputs"
    >
        <div className="row">
        
        <div className="name">
        <label>* Enter your name:</label>
        <input type="text" name="user_name" placeholder='Tanishka Gupta'/>
        </div>
        <div className="name">
        <label>* Enter your email:</label>
        <input type="email" name="user_email" placeholder='tanishka@email.com'/>
        </div>
        </div>
        <div className="contact-name-btn">
        <div className="name">
        <label>* Enter your message:</label>
        <textarea name="message"placeholder='NinjaStudy is a personal AI English tutor App, focused 
improving your speaking skills. You can think of it as ' />
        </div>
        <div className="btn">
        {/* <input type="submit" value="Send" />  */}
        <button className='submitbtn'>Submit</button>
        </div>
        </div>
  </form>
  </>
  )
}

export default Form
