import React from 'react'

function Login({setAuth}) {
  return (
    <div>
      <button onClick={()=> localStorage.setItem("ls",true)}>LOG IN</button>
    </div>
  )
}

export default Login