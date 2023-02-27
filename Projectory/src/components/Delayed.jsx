import React from 'react'
import ProjectComp from './ProjectComp'
import { projectWithCategory } from './ProjectComp'
const Delayed = ({projects,setProject}) => {
 console.log(projects.map(project => (projectWithCategory(project))))
  return (
 
   
   <>
    {projects.map(project => (projectWithCategory(project))).filter(p => (p.category === 'Delayed')).map(project => ( <ProjectComp setProject={setProject} project={project}/>))}
   </>
 
  )
}

export default Delayed