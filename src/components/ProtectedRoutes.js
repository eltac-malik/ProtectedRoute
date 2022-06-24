import React, { useEffect } from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import Login from './Login'


function ProtectedRoutes({auth,setAuth}) {

  return auth == true ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes



