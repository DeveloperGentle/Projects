import React from 'react'
import { Routes, Route , Navigate} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'
import PostDetails from './components/PostDetails/PostDetails';
import {GoogleOAuthProvider} from '@react-oauth/google'


function App() {
const user = JSON.parse(localStorage.getItem('profile'))

 return (
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_KEY}>
  <div className="App p-5">
  <Navbar/>

<Routes>
<Route path="/" element={<Navigate to ="/posts" />}/>
<Route path="/posts" element={<Home/>}/>
<Route path="/posts/search" element={<Home/>}/>
<Route path="/posts/:id" element={<PostDetails/>}/>
<Route path="/auth" element={!user ? <Auth/> : <Navigate to= "/posts" />}/>
</Routes>
</div>
  </GoogleOAuthProvider>


 )
 
}

export default App;
