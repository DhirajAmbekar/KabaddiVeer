import React from 'react'
// import '../style/Signin.css'

const Signin = () => {
  return (
    <>
        <div className='maindiv'>
            <div>
            <img src="frontend\src\asset\Netflix_Logo.jpg" alt='netflix-logoo'/>
            </div>
            <div className='box'>
                <div className='inner_box'>
                   <h2>Sign In</h2>
                   <input className='inputclas' type='email' placeholder='Email or mobile number'></input>
                   <input className='inputclas' type='password' placeholder='Password'></input>
                   <button className='submit_btn'>Sign in</button>
                </div>
                {/* <input className='input'></input> */}
            </div>
        </div>
    </>
  )
}

export default Signin