import React from 'react'
import ProjectComp from './ProjectComp'
import { projectWithCategory } from './ProjectComp'

const All = ({projects,setProject}) => {

  return (
   <>
   
{projects.map(project => (projectWithCategory(project))).map(project => ( <ProjectComp setProject={setProject} project={project}/>))} 
    
   
   
 </>
 
  )
}


export default All