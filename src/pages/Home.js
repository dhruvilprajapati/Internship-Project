import React from 'react'
import avtar from './../images/avtar.jpg'
import './../custom.scss'
export default function Layout() {
  return (
    <div className="min-h-screen bg-dark text-white mt-5 fn">
      <div className="container pt-5 d-flex flex-column align-items-center">
        <img src={avtar} width={180} height={180} alt="Dhruvil Prajapati" className='rounded-circle zoom member' />
        <h3 className='mt-5 textanimation'>I'm Dhruvil Prajapati</h3>
        <h4 className='mt-3'>Software Developer</h4>
        <p className="text-center border-bottom pb-3 mt-3">I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.</p>
        <p className="text-center" style={{paddingTop: "35px"}}>
          <span className="d-mobile-block">Email: prajapatidhruvil.a@gmail.com</span>
          <br />
          <br/>
          <span className="d-mobile-block">Phone: +91-9099270401</span>
        </p>
        <p className="text-center">Address: 44,Swaminarayan Park-1, Vastral, Ahmedabad. IN - 382418</p>
      </div>
    </div>
  )
}
