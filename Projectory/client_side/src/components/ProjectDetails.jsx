import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { projectWithCategory } from './ProjectComp';
import { Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { parseISO,isFuture,isPast } from "date-fns"

const ProjectDetails = ({setProject,project,projects,updateProjects,updateProject,terminateProject,setIsUpdate}) => {

 

 const start = parseISO(project.startDate)
const end = parseISO(project.endDate)

 const handleCompleted = () => {
  

  if (project.category !== 'Completed') {
   
 setProject({...project,category : 'Completed'})
   updateProject(project._id,project) }

  else { 
   
   setProject({...project,category : isFuture(start) ? 'Pending' : !isFuture(start) && !isPast(end) ? 'Started' : 'Delayed'})
   updateProject(project._id,project) }

  console.log(project)
  
};

const theme = createTheme({
 palette: {
   success: {
     main: '#4caf50',
   },
 },
});

  return (
   <ThemeProvider theme={theme}>
   <div className="flex  justify-center">
   <div className="max-w-4xl h-max pb-6 bg-white w-full shadow-xl">
     <div className="p-4 border-b">
       <h2 className="text-2xl ">Project: {project.name}</h2>
       <p className="text-sm text-gray-500">
        Project details and information.
       </p>
     </div>
     <div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Project name</p>
         {/* <div className="flex items-center gap-10"> */}
          <p>{project.name}</p>
         
         {/* </div> */}
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Project about</p>
         {/* <div className="flex items-center gap-10"> */}
        <p>{project.description}</p>
        
       {/* </div> */}
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">Start date</p>
         {/* <div className="flex items-center gap-10"> */}
         <p>{project.startDate}</p>
       {/* </div> */}
       </div>
       <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
         <p className="text-gray-600">End date</p>
         {/* <div className="flex items-center gap-10"> */}
         <p>{project.endDate}</p>
       {/* </div> */}
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
       {/* <div className="flex items-center gap-10"> */}
       <p>${project.budget}</p>
       {/* </div> */}
       </div>
       <div className="flex items-center justify-between">
       <Link to="/all" className="flex items-center text-sm text-[#434343] p-4 gap-2"><Icon icon={faArrowLeft}/>Back</Link>
       <div className="flex items-center gap-3 p-4">
       <Button variant={project.category === 'Completed' ? 'contained' : 'outlined'}
        sx={{
          bgcolor: project.category === 'Completed' ? theme.palette.success.main : 'transparent',
          color: project.category === 'Completed' ? '#fff' : theme.palette.success.main,
          border: project.category === 'Completed' ? 'none' : `1px solid ${theme.palette.success.main}`,
          '&:hover': {
            bgcolor: project.category === 'Completed' ? theme.palette.success.main : '#f3f3f3',
            border: project.category === 'Completed' ? 'none' : `1px solid ${theme.palette.success.main}`,
          }
        }}
  onClick={handleCompleted} endIcon={<CheckIcon />}>
  {project.category === 'Completed' ? "Project Completed" : "Mark as Completed"}
</Button>
       <Link to="/createProject"><Button variant="contained" endIcon=''  style={{background: "#EC5252"}}
       onClick={() => setIsUpdate(true)}>
 <div>Edit project</div>
</Button></Link>
<Button variant="contained" endIcon='' onClick={() => terminateProject(project._id)}  style={{background: "#EC5252"}}>
 <div>Terminate project</div>
</Button>
       <button className="flex items-center text-sm text-[#434343] gap-2"
       onClick={() => projects.indexOf(project) !== projects.length -1 ? setProject(projects[projects.indexOf(project) + 1]) : setProject(projects[0])}>Next<Icon icon={faArrowRight}/></button>
{/* //sets the project as the next project in the array, "projects".
If the project is the last project, then set the project to be the first project i the array */}
</div>
       </div>
     </div>
   </div>

 </div>
 </ThemeProvider>

  )
}



export default ProjectDetails