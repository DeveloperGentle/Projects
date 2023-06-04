import React,{useState} from 'react'
import Input from './Input'
import {GoogleLogin,googleLogout} from '@react-oauth/google'
import { useDispatch } from 'react-redux'
import jwt_decode from 'jwt-decode'
import {useNavigate} from 'react-router-dom'
import { signIn,signUp } from '../../actions/auth'

const Auth = () => {
 const [isSignup,setIsSignup] = useState(false)
 const [showPassword,setShowPassword] = useState(false)
 const initialFormData = {
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirmPassword:''
 }

 const [formData,setFormData] = useState(initialFormData)
 const dispatch = useDispatch()
 const navigate = useNavigate()
 

 const handleSubmit = (e) => {
e.preventDefault()

if(isSignup) dispatch(signUp(formData,navigate))
 
else dispatch(signIn(formData,navigate))
 
}

const switchMode = () => {
 setIsSignup(prevState => !prevState)
 setShowPassword(false)
}

 const handleChange = (e) => {
  const { name, value } = e.target
setFormData({...formData, [name]: value})
 } 

 const handleShowPassword = () => {
setShowPassword(prevState => (!prevState))
 }

 const googleSuccess = async (res) => {
const result = jwt_decode(res?.credential)

try {
 dispatch({ type: 'AUTH',data: { result } })
 navigate('/')
} catch (error) {
 console.log(error)
}
 }

 const googleFailure = () => {
  console.log('Google sign in unsuccessful, try again later.')
 }

  return (
   <>
   
   <main className="flex justify-center items-center">
     <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
       <div style={{backgroundColor:""}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl bg-blueGray-50 rounded-lg bg-white border-0">
         <div className="rounded-t mb-0 px-6 pt-6 pb-4">
           <div className="text-center mb-3">
             <h6 className="text-gray-500 text-sm font-bold">
               {isSignup ? 'Sign up' : 'Sign in'}
             </h6>
           </div>
           <div className="flex justify-center">
            
             <GoogleLogin 
             onSuccess={googleSuccess}
             onError={googleFailure}
             cookieOrigin="single_host_origin"
             />
           </div>
           <hr className="mt-6 border-b-1 border-blueGray-300" />
         </div>
         <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
           <div className="text-gray-500 text-center mb-3 font-bold">
             <small>{isSignup ? 'Or sign up with credentials' : 'Or sign in with credentials'}</small>
           </div>
           <form onSubmit={handleSubmit}>
           {isSignup && <div className="flex justify-between items-center w-full gap-2">
            <div className="relative w-full mb-3">
             
               <Input
                 type="text"
                 placeholder="First name"
                 name="firstName"
                 handleChange={handleChange}
                 autofocus={true}
               />
             </div>
             <div className="relative w-full mb-3">
               
               <Input
                 type="text"
                 placeholder="Last name"
                 name="lastName"
                 handleChange={handleChange}
               />
             </div>
             </div>}
             <div className="relative w-full mb-3">
               
               <Input
                 type="email"
                 placeholder="Email"
                 name="email"
                 handleChange={handleChange}
                 autofocus={true}
               />
             </div>
             <div className="relative w-full mb-3">
              
               <Input
                 type={showPassword ? 'text':'password'}
                 placeholder="Password"
                 name="password"
                 handleChange={handleChange}
                 handleShowPassword={handleShowPassword}
                 data={formData}
               />
             </div>
            {isSignup && <div className="relative w-full mb-3">
              
               <Input
                 type='password'
                 placeholder="Confirm password"
                 name="confirmPassword"
                 handleChange={handleChange}
                 
               />
             </div>}
          {/* { isSignup &&  <div className="mb-3">
               <label className="inline-flex items-center cursor-pointer">
                 <input
                   id="customCheckLogin"
                   type="checkbox"
                   className="form-checkbox border-0 rounded text-blue-600 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                 />
                 <span className="ml-2 text-sm font-semibold text-blueGray-600">
                   Remember me
                 </span>
               </label>
             </div>} */}
             {
              isSignup ?
              
               <small className="text-gray-600 mb-3">Already have an account? <span className="underline cursor-pointer" onClick={switchMode}>Sign in</span></small>

              :

              <small className="text-gray-600 mb-3">Don't have an account? <span className="underline cursor-pointer" onClick={switchMode}>Sign up</span></small>
             }
             <div className="text-center mt-3">
               <button
                 className="bg-blue-600 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                 type="submit"
               >
                 
                 {isSignup ? 'Sign Up' : 'Sign In'}
               </button>
             </div>
           </form>
         </div>
       </div>
     </div>
    
   </main>
 </>
  )
}

export default Auth