import React from 'react'

const Form = () => {
  return (
    <><form method="POST">
    <div className="row">
      <div>
      <label>Name</label> <br />
      <input type="text"  placeholder='your name'/>
      </div>
      <div>
      <label>Name</label> <br />
      <input type="text" placeholder='your email' />
      </div>
    </div>

    <div className="row">
      <div className='textarea'>
      <label>message</label> <br />
      <input className='textarea' type="text" name="" id="" />
      </div>
      <div>
      <button className='submitbtn'>Submit</button>
      </div>
    </div>
    </form>
  </>
  )
}

export default Form
