import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
 
 const [isShown,setIsShown] = useState(false) 
 const [signUpData,setSignUpData] = useState({name:'',email:'',password:'',userNotes:[]})
 const updateData = (e) => {
  setSignUpData(prevData => ({...prevData,[e.target.name]:e.target.value}))
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  delete signUpData.undefined

  console.log(signUpData)
 
 }


 
  return (
   <div className="flex justify-center items-center">
   <div className="py-6 px-8  bg-white rounded shadow-xl" style={{height:'max-content',width:'396px',marginTop:'15vh'}}>
     <form onSubmit={handleSubmit}>
       <div className="mb-6">
         <label htmlFor="name" className="block text-gray-800 font-semibold">Name</label>
         <input onChange={updateData} type="text" name="name" id="name" placeholder="Full name" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
       </div>
 
       <div className="mb-6">
         <label htmlFor="email" className="block text-gray-800 font-semibold">Email</label>
         <input onChange={updateData} type="text" name="email" id="email" placeholder="myname@gmail.com" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
 
         
       </div>
 
       <div className="mb-6">
         <label htmlFor="password" className="block text-gray-800 font-semibold">Password</label>
         <div className="flex items-center">
         <input onChange={updateData} type={isShown ? "text":"password"} name="password" id="password" placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
         <Icon icon={isShown ? faEyeSlash:faEye} style={{marginTop:'6px',marginLeft:'-30px',cursor:'pointer',color:'#128f46'}} onClick={() => setIsShown(prevIsShown => (!prevIsShown))}/>
         </div>
       </div>
       <button type="submit"  style={{backgroundColor:'#128f46'}} className="py-2 px-4 block mt-6 text-white w-full rounded">Start taking notes</button>
     
     </form>
     <span className="mt-4 inline-block text-sm">Already have an account? <Link to="/login" style={{color:'#222222'}} className="underline">Login</Link></span>
  
   </div>
 </div>
  )
}


export default SignUp