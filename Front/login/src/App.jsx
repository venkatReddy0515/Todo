import { useState } from 'react'

import './App.css'

function App() {
  const [sign,setSign]=useState("login");
  return(
    <>
      <div className="container">
        <div className="from">
          <div>
              <h1>
                Login Form MERN
              </h1>
          </div>
          <div>
            {sign==="login"?
            <div>
              Enter username:
              <input type="text" name="user" id="user" placeholder='Enter userName'/>
            </div>
            <div>
              Enter password:
              <input type="password" name="password" id="password" placeholder='Enter password'/>
            </div>
            <div>
              Enter Email:
              <input type="email" name="email" id="email" placeholder='Enter email'/>
            </div>
            ):()
            }
              
          </div>
        </div>
      </div>
    </>
  )
  
}

export default App
