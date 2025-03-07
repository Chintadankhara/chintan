import React from 'react'
import img from '../assets/my.jpg'
export const Home = () => {
  return (
    <>
    <div className=' container mt-5'>
    <span className='row text-center'>
    <span className='right col-lg-6'>
          <img src={img} alt="" className=' img-fluid h-75' width={'350px'} height={'350'} />
        </span>
        <span className='left col-lg-6'>
          <h1 className='myeffect'>Hi there, Im<br />
           Chintan
          <span className='effect'>Dankhara</span>
          </h1>
          <p className='write'>
            I'm a <span style={{color:"black"}}> MERN</span> stack web developer , i can create <span style={{color:"black"}}> responsive</span> full <br />stack wesite for your product.<br/> I have successfully completed  lot's of project. <br />
            You can check in my @Official github account. You also follow <br /> me on below give link
          </p>
        </span>
        
      </span>
    </div>
     

    </>
  )
}
