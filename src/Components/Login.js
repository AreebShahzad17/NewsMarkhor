import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const {loginWithRedirect} = useAuth0(); 

  return (
    <div>
         <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={{ backgroundColor: 'black' }}>
      <div className="text-center mb-4">
      <img src="https://cdn-icons-png.flaticon.com/128/15707/15707461.png" alt="NewsMarkhor Logo" style={{ width: '120px', marginBottom: '10px', filter: 'invert(100%)' }} />
        <h1 style={{ color: 'white' }}>Welcome to NewsMarkhor</h1>
      </div>
      <div></div>
        <h1 style={{ color: 'white' }}>Hello Guest</h1>
        <button
    
        style={{
            transition: 'transform 0.3s',
            transform: 'scale(1)'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
         className='btn btn-primary btn-lg my-4' 
         onClick={loginWithRedirect}
         >Login To NewsMarkhor</button>

    </div>
    </div>
  )
}

export default Login
