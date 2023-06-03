import React from 'react'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { differenceInDays, parseISO } from 'date-fns'
const ProjectComp = ({setProject,project}) => {

  return (
   
   <Link to="/project details">
   <div onClick={() => {
   
    setProject(project)
    console.log(project)
   }} className="project-con cursor-pointer inline-block bg-white rounded-2xl shadow-xl shadow-slate-300/60">
      
   <div className="p-4">
 
     <h1 className="text-2xl  text-slate-600 pb-2">{project.name}</h1>
     <p className="text-sm tracking-tight pb-2  text-slate-400 leading-6">
      {project.description}
     </p>
         <small className="text-blue-400 text-xs flex items-center gap-1.5 pb-2 tracking-widest">
         <Icon icon={faClock}/>{project.startDate} to {project.endDate}({differenceInDays(parseISO(project.endDate),parseISO(project.startDate))} days)
         </small>
         <small className='text-[#EC5252] text-sm flex justify-end'>{project.category}</small>
   </div>
 </div>
</Link>
  )
}

// export const projectWithCategory = (project) => {
//  const date = new Date().getDate()
//  const start = Number(project.startDate?.slice(project.startDate.length-2))
//  const end = Number(project.endDate?.slice(project.endDate.length-2))
//  let category = start > date ? 'Pending':start <= date && end > date ? 'Started':'Delayed'


//  return (
//   {...project,category:category}
//  )
// }


export default ProjectComp