import React,{useState,useEffect} from 'react'
import {Routes,Route,Navigate,useLocation} from 'react-router-dom';
import CreateProject from './components/CreateProject';
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails';
import Stats from './components/Stats';
import Navbar from './components/Navbar/Navbar';
import * as api from './api/index'
import  './components/components.css'
import All from './components/All';
import Auth from './components/Auth/Auth';
import { isPast, parseISO, isToday } from 'date-fns'


const App = () => {
 const [user, setUser] = useState(null)
 const [project,setProject] = useState({
  name:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"",
  category:""
 })


const location = useLocation()

const [isUpdate,setIsUpdate] = useState(false)
 
 const [projects,updateProjects]  = useState([])
 const [updateSuccess, setIsUpdateSuccess] = useState(false)
 const [createSuccess, setCreateSuccess] = useState(false)
 
 const [open, setOpen] = useState(false);
 const [severity, setSeverity] = useState('success');
 const [message, setMessage] = useState('');
 const [fetchError, setFetchError] = useState('')

 const showSnackbar = (type, message) => {
  setSeverity(type);
  setMessage(message);
  setOpen(true);
};

 async function  getProjects() {
  try {
  const { data } = await api.fetchProjects()
  updateProjects(data)
  
  }

  catch(error) {
   console.log(error)
   setFetchError('Could not load projects')
  }
   }

   async function  createProject(project) {
    try {    const { data } = await api.createProject(project)
     updateProjects(prevProjects => [...prevProjects,data])
console.log(data)
showSnackbar('success', `Project "${project.name}" created successfully`)

}

catch(error) {
 console.log(error)
}
     }

     async function updateProject(id,project) {
      try {
const { data } = await api.updateProject(id,project)
updateProjects(prevProjects => prevProjects.map(proj => proj._id === id ? data : proj))
showSnackbar('success', `Updated project "${project.name}"`)
}

      catch(error) {
       console.log(error)
      }
     }


     async function terminateProject(id) {
      try {
await api.terminateProject(id)//set it to the data variable when it works
updateProjects(projects.filter(project => project._id !== id))
showSnackbar('error', `Deleted project "${project.name}"`)
      }

      catch(error) {
console.log(error)
      }
     }

useEffect(() => {
 getProjects()

},[])

useEffect(() => {
 if(projects) {
  if(projects.some(project => isPast(parseISO(project.endDate)))) {
   const delayedProjects = projects.filter(project => isPast(parseISO(project.endDate)))

delayedProjects.forEach(project => updateProject(project._id,{...project,category:"Delayed"}) )
  }

  if(projects.some(project => project.category === "Pending")) {
   const pendingProjects = projects.filter(project => project.category === "Pending")

   pendingProjects.forEach(project => {
    if(isPast(parseISO(project.startDate)) || isToday(parseISO(project.startDate))) {
updateProject(project._id, {...project, category: "Started"})
    }
   
   })
  }
 }
},[])

  return (

<>
<Navbar user={user} setUser={setUser}/>
<Routes>
<Route path="/" element={<Navigate to="/all"/>}/>
         <Route path="/all" element={<All 
         projects={projects} 
         setProject={setProject}
          setIsUpdate={setIsUpdate}
          message={message}
           showSnackbar={showSnackbar}
            severity={severity}
             open={open}
              setOpen={setOpen}
              fetchError={fetchError}
         />}/>
         
            <Route path="/createProject" element={<CreateProject 
             createProject={createProject}
             project={project} 
             setProject={setProject} 
             isUpdate = {isUpdate}
             setIsUpdate={setIsUpdate}
             updateProject={updateProject}
             
             />}/>

        <Route path="/project details" element={<ProjectDetails
         project={project}
         setProject={setProject}
         projects={projects}
         setIsUpdate={setIsUpdate}
         terminateProject={terminateProject}
         updateProject={updateProject}
         />}/>

        <Route path="/stats" element={<Stats projects={projects}/>}/>
        <Route path="/auth" element={<Auth setUser={setUser}/>}/>
        </Routes>
</>
  )
        }

export default App