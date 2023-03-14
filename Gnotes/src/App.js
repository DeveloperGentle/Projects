import React from 'react';
import NotebookRendering from './components/Notebook/notebook';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp';
import {Routes,Route} from 'react-router-dom';


const App = () => {

 return (

     <div className="App mx-auto container">
    <Routes>

     <Route path="/" element={<NotebookRendering/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/signup" element={<SignUp/>}/>
</Routes>
  </div>


)};
export default App;
