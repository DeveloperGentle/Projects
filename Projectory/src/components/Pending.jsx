import React from 'react'
import ProjectComp from './ProjectComp'
import { projectWithCategory } from './ProjectComp'
const Pending = ({projects,setProject}) => {
 console.log(projects.map(project => (projectWithCategory(project))))
  return (
 
   
   <>
    {projects.map(project => (projectWithCategory(project))).filter(p => (p.category === 'Pending')).map(project => ( <ProjectComp setProject={setProject} project={project}/>))}
   </>
 
  )
}

export default Pending