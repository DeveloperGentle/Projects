import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import jwt_decode from 'jwt-decode'

const Navbar = () => {
 const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')) || null)
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()

 const logout = () => {

dispatch({type:'LOGOUT'})

navigate('/')

setUser(null)

 }

 useEffect(() => {
  const token = user?.token

  if(token) {
  const decodedToken = jwt_decode(token)

  if(decodedToken.exp * 1000 < new Date().getTime()) logout()
  }

  else {
   if(user?.result?.exp * 1000 < new Date().getTime()) logout()
  }

setUser(JSON.parse(localStorage.getItem('profile')))
 },[location])

  return (
   <nav className="mb-5 flex justify-between text-white">
   <Link to="/"><h1 className='text-3xl'>Sociall</h1></Link>
 
    {user? (
<div className="flex items-center gap-7">
<Link className="flex items-center gap-2">
<Avatar style={{fontSize:'1em'}}>{user.result.given_name ? user.result.given_name.charAt(0)  : user.result.name.charAt(0)}</Avatar>

<h6>{user.result.given_name ? `${user.result.given_name} ${user.result.family_name}`: user.result.name}</h6>

</Link>
  <Link to="/"><button type="button" onClick={logout} className=" inline-block px-5 py-3 bg-blue-600 text-white font-medium text-sm leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
Log Out
</button></Link>
</div>
    ):(
     <div className='flex items-center gap-4'>
     <Link to="/auth"><button type="button" className=" inline-block px-5 py-3 bg-blue-600 text-white font-medium text-sm leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
Sign In
</button></Link>
 {/* <Link to="/auth" className="hover:pb-1 border-b-2 border-blue-600 pb-0.5">Sign In</Link> */}
</div>
    )}
   
   
   </nav>
  )
}

export default Navbar