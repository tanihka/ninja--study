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
        <label>* Enter your email:</label>
        <input type="email" name="user_email" placeholder='your@email.com'/>
        </div>
        <div className="name">
        <label>* Enter your name:</label>
        <input type="text" name="user_name" placeholder='Your name'/>
        </div>
        </div>
        
        <div className="name">
        <label>* Enter your message:</label>
        <textarea name="message"placeholder='Enter text here' />
        </div>
        <div className="btn">
        {/* <input type="submit" value="Send" />  */}
        <button className='submitbtn'>Send <i class="fa-solid fa-arrow-right-long"></i></button>
        </div>
  </form>
  </>
  )
}

export default Form