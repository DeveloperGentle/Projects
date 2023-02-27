import React from 'react'
import {Link} from 'react-router-dom'
import { projectWithCategory } from './ProjectComp'
const Stats = ({projects}) => {
  return (
   
   <div className="p-7">

   <Link to="/all" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">All Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.length}</p>
      
       
     </Link>
   
     <Link to="/pending" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Pending Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.map(project => (projectWithCategory(project))).filter(project=> (project.category === 'Pending')).length}</p>
      
       
     </Link>
  
     <Link to="/started" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Started Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.map(project => (projectWithCategory(project))).filter(project=> (project.category === 'Started')).length}</p>
      
       
     </Link>

        <Link to="/delayed" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Delayed Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.map(project => (projectWithCategory(project))).filter(project=> (project.category === 'Delayed')).length}</p>
      
       
     </Link>

     <Link to="/completed" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Completed Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">20,456</p>
      
       
     </Link>

     <div className="  inline-block mr-4 mb-3  w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Cancelled Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">20,456</p>
      
       
     </div>
   
 </div>
 
  )
}

export default Stats