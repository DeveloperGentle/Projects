import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [isShown,setIsShown] = useState(false) 
 return (
  <div className="flex justify-center items-center">
  <div className="py-6 px-8 bg-white rounded shadow-xl" style={{height:'max-content',width:'396px',marginTop:'20vh'}}>
    <form action="" method="post">
      

      <div className="mb-6">
        <label for="email" className="block text-gray-800 font-semibold">Email</label>
        <input type="text" name="email" id="email" placeholder="myname@gmail.com" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

        
      </div>

      <div className="mb-6">
        <label for="password" className="block text-gray-800 font-semibold">Password</label>
        <div className="flex items-center">
        <input type={isShown ? "text":"password"} name="password" id="password" placeholder="Password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        <Icon icon={isShown ? faEyeSlash:faEye} style={{marginTop:'6px',marginLeft:'-30px',cursor:'pointer',color:'#128f46'}} onClick={() => setIsShown(prevIsShown => (!prevIsShown))}/>
        </div>
        <Link to="#" style={{color:'#222222'}} className="text-sm float-right underline  mt-2 inline-block">Forgot Password</Link>
      </div>
      <button style={{backgroundColor:'#128f46'}} className="py-2 px-4 block mt-12 text-white  w-full rounded">Login</button>
    </form>
    <span className="mt-4 inline-block text-sm">Don't have an account? <Link to="/signup" style={{color:'#222222'}} className="underline">Sign up</Link></span>
  </div>
</div>
 )
}

export default Login;