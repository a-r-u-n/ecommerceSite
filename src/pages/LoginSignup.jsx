import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
      <div className='login-container'>
        <h1>SignUp</h1>
        <div className='input-fields'>
          <input type='text' placeholder='Enter Your Name'></input>
          <input type='email' placeholder='Enter your E-mail'></input>
          <input type='password' placeholder='Password'></input>
        </div>
        <button>Continue</button> 
        <p className='login-text'>Already have an account <span>Login here</span></p>
     <div className='agree'>
  <input type='checkbox'></input>
  <label>By continuing I agree to the terms and privacy policy</label>

</div>
      </div>
    </div>
  )
}

export default LoginSignup