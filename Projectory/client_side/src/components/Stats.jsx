import React from 'react'

const Stats = ({projects}) => {
  return (
   
   <div className="p-7">

   <div to="/all" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">All Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.length}</p>
      
       
     </div>
   
     <div to="/pending" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Pending Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.filter(project=> (project.category === 'Pending')).length}</p>
      
       
     </div>
  
     <div to="/started" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Started Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.filter(project=> (project.category === 'Started')).length}</p>
      
       
     </div>

        <div to="/delayed" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Delayed Projects</p>
       </div>
      
       <p className="py-7 text-3xl ml-5">{projects.filter(project=> (project.category === 'Delayed')).length}</p>
      
       
     </div>

     <div to="/completed" className="  inline-block mr-4 mb-3 w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
       <div className="py-3 bg-red-400 flex items-center justify-between">
         <p className="mr-0 text-white text-lg pl-5">Completed Projects</p>
       </div>
       <p className="py-7 text-3xl ml-5">{projects.filter(project=> (project.category === 'Completed')).length}</p>

       
      
       
     </div>

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