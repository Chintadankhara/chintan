import React from 'react'

export const Login = () => {
  return (
    <>
    <div className='main'>
    <div className="d-flex justify-content-center mt-5">

      <form action="" className='mainform text-center'>
        <h2 className=' text-dark-emphasis mt-5'>Login form</h2>
        <br />
        <input type="text" name="" id="" className='txt mt-3 w-75' placeholder='Username'/>
        <input type="text" name="" id=""  className='txt mt-5 w-75' placeholder='Pasword'/> <br />
        <input type="checkbox" id='remember' className='point che me-1'/>
        <label htmlFor="remember" className='point mt-5 me-5'>Remember</label>
        <label htmlFor="foget" className='point'>Foreget password ?</label>
        <input type="submit"  className='mt-5 btn btn-success w-75'/>
      </form>
    </div>
    </div>
    </>
  )
}
