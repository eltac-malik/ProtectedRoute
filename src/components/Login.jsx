import React from 'react'

function Login({setAuth}) {
  return (
    <div>
      <button onClick={()=>
      {
        localStorage.setItem("ls",true)
        setAuth(JSON.parse(localStorage.getItem("ls")));
      }}>LOG IN</button>

      <button onClick={()=> 
        {
          localStorage.setItem("ls",false)
          setAuth(JSON.parse(localStorage.getItem("ls")));
        }}>LOG OUT</button>
    </div>
  )
}

export default Login