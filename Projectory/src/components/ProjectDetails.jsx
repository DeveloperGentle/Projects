import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { projectWithCategory } from './ProjectComp';
const ProjectDetails = ({setProject,project,projects,updateProjects}) => {
 const [wantsToEdit,setWantsToEdit] = useState({
  name:false,
  category:false,
  description:false,
  startDate:false,
  endDate:false,
  budget:false
 })
 const [newProject,setNewProject] = useState({
  name:project.name,
  category:project.category,
  description:project.description,
  startDate:project.startDate,
  endDate:project.endDate,
  budget:project.budget
 })

 const updateNew = (e) => {
  setNewProject(prevProject => ({...prevProject,[e.target.name]:e.target.value}))
 }
  return (
   <div className="flex  justify-center">
   <div className="max-w-4xl h-max pb-6 bg-white w-full rounded-lg shadow-xl">
     <div className="p-4 border-b">
       <h2 className="text-2xl ">Project: {project.name}</h2>
       <p className="text-sm text-gray-500">
        Project details and information.
       </p>
     </div>
     <div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Project name</p>
         <div className="flex items-center gap-10">
         {!wantsToEdit.name ? <p>{project.name}</p>:
         <p><input type="text" onChange={updateNew} name="name" value={newProject.name} className="outline-none p-3"/></p>}
        { !wantsToEdit.name ? <Icon icon={faPen} size="sm" className="cursor-pointer"
          onClick={() => {setWantsToEdit(former => ({...former,name:!wantsToEdit.name}))}}/>:
           <Icon onClick={()=>{
            projects.splice(projects.indexOf(project),1,newProject)
            setProject(newProject)
            updateProjects(prevProjects => ([...prevProjects]))
            setWantsToEdit(prev => ({...prev,name:!wantsToEdit.name}))
           }} icon={faPen} size="sm" className="cursor-pointer p-3 bg-transparent hover:bg-white rounded-full"
          />}
         </div>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Project about</p>
         <div className="flex items-center gap-10">
         {!wantsToEdit.description ? <p>{project.description}</p>:
         <p><input onChange={updateNew}  name="description" type="text" value={newProject.description}className="outline-none p-3"/></p>}
       {!wantsToEdit.description ? <Icon icon={faPen} size="sm" className="cursor-pointer  bg-transparent hover:bg-white rounded-full"
        onClick={() => {setWantsToEdit(former => ({...former,description:!wantsToEdit.description}))}}/>:
        <Icon onClick={() => {
         projects.splice(projects.indexOf(project),1,newProject)
         setProject(newProject)
            updateProjects(prevProjects => ([...prevProjects]))
            setWantsToEdit(prev => ({...prev,description:!wantsToEdit.description}))
        }} icon={faPen} size="sm" className="cursor-pointer p-3 bg-transparent hover:bg-white rounded-full"
        />}
       </div>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Start date</p>
         <div className="flex items-center gap-10">
         {!wantsToEdit.startDate ? <p>{project.startDate}</p>:
         <p><input onChange={updateNew} name ="startDate" type="date" value={newProject.startDate} className="outline-none p-3"/></p>}
       {!wantsToEdit.startDate ? <Icon icon={faPen} size="sm" className="cursor-pointer  bg-transparent hover:bg-white rounded-full"
        onClick={() => {setWantsToEdit(former => ({...former,startDate:!wantsToEdit.startDate}))}}/>:
        <Icon icon={faPen} size="sm" className="cursor-pointer p-3 bg-transparent hover:bg-white rounded-full"
        onClick={() => {
         projects.splice(projects.indexOf(project),1,newProject)
         setProject(newProject)
            updateProjects(prevProjects => ([...prevProjects]))
            setWantsToEdit(prev => ({...prev,startDate:!wantsToEdit.startDate}))
        }}/>}
       </div>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">End date</p>
         <div className="flex items-center gap-10">
         {!wantsToEdit.endDate ? <p>{project.endDate}</p>:
         <p><input onChange={updateNew} name="endDate" type="date" value={newProject.endDate} className="outline-none"/></p>}
   {   !wantsToEdit.endDate ? <Icon icon={faPen} size="sm" className="cursor-pointer  bg-transparent hover:bg-white rounded-full"
        onClick={() => {setWantsToEdit(former => ({...former,endDate:!wantsToEdit.endDate}))}}/>:
        <Icon icon={faPen} size="sm" className="cursor-pointer p-3 bg-transparent hover:bg-white rounded-full"
        onClick={() => {
         projects.splice(projects.indexOf(project),1,newProject)
         setProject(newProject)
            updateProjects(prevProjects => ([...prevProjects]))
            setWantsToEdit(prev => ({...prev,endDate:!wantsToEdit.endDate}))
        }}/>}
       </div>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Status</p>
         <p>
         {project.category}
         </p>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Time left</p>
       <p>This is a placeholder...</p>
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Budget</p>
       <div className="flex items-center gap-10">
       {!wantsToEdit.budget ? <p>{project.budget}</p>:
       <p><input onChange={updateNew} name="budget" type="text" value={newProject.budget} className="outline-none p-3"/></p>}
       {!wantsToEdit.budget ? <Icon icon={faPen} size="sm" className="cursor-pointer  bg-transparent hover:bg-white rounded-full"
        onClick={() => {setWantsToEdit(former => ({...former,budget:!wantsToEdit.budget}))}}/>:
        <Icon icon={faPen} size="sm" className="cursor-pointer p-3 bg-transparent hover:bg-white rounded-full"
        onClick={() => {
         projects.splice(projects.indexOf(project),1,newProject)
         setProject(newProject)
            updateProjects(prevProjects => ([...prevProjects]))
            setWantsToEdit(prev => ({...prev,budget:!wantsToEdit.budget}))
        }}/>}
       </div>
       </div>
       <div className="flex items-center justify-between">
       <Link to="/all" className="flex items-center text-sm text-[#434343] p-4 gap-2"><Icon icon={faArrowLeft}/>Back</Link>
       <button className="p-4 text-sm" onClick={() => {
        projects.splice(projects.indexOf(projects.find(p => p.name = project.name)),1)
        if(projects[projects.indexOf(project)+1]) setProject(projectWithCategory(projects[projects.indexOf(project)+1]))
        else return null
        
        updateProjects(prevProjects => ([...prevProjects]))
        console.log(project)
    }}>Delete project</button>
       </div>
     </div>
   </div>

 </div>

  )
}



export default ProjectDetails