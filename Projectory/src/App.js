import React,{useState,useEffect} from 'react'
import {Routes,Route,Link} from 'react-router-dom';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {faCancel} from '@fortawesome/free-solid-svg-icons';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import Pending from './components/Pending';
import All from './components/All';
import Cancelled from './components/Cancelled';
import Completed from './components/Completed';
import Started from './components/Started';
import CreateProject from './components/CreateProject';
import Delayed from './components/Delayed';
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails';
import Stats from './components/Stats';
import  './components/components.css'

const App = () => {
 const [project,setProject] = useState({
  name:"",
  category:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"none"
 })
 
 const [projects,updateProjects]  = useState(JSON.parse(localStorage.getItem('projects')) || [])
 const [alsoProjects,setAlsoProjects] = useState(JSON.parse(localStorage.getItem('also-projects')) || [])

useEffect(() => {
 localStorage.setItem('projects',JSON.stringify(projects))
 localStorage.setItem('also-projects',JSON.stringify(alsoProjects))
},[projects,alsoProjects])

  return (
    <div className="App">


<>
     {/* component */}
  <div className="flex">
    <div className="flex lg:pr-10   bg-white">
      <div className="ml-7 py-10">
        <h1 className="text-2xl font-bold mb-10 cursor-pointer text-[#EC5252] duration-150">
          Projectory
        </h1>
        <ul>
          <li className="flex gap-1.5 mt-5 cursor-pointer items-center hover:text-[#EC5252] duration-150">
           <Icon icon={faHome} size="sm" className="text-[#EC5252]"/>
            <span className="font-semibold">Home</span>
          </li>
          <li className="flex gap-1.5 mt-5 cursor-pointer items-center hover:text-[#EC5252] duration-150">
           <Icon icon={faBook} className="text-[#EC5252] "/>
            <Link to="/all" className="font-semibold">All</Link>
          </li>
          <li className="flex gap-1.5 mt-5 cursor-pointer items-center hover:text-[#EC5252] duration-150">
         <Icon icon={faClock} className="text-[#EC5252] "/>
            <Link to="/pending" className="font-semibold">Pending</Link>
          </li>
          <li className="flex gap-1.5 mt-5 cursor-pointer items-center hover:text-[#EC5252] duration-150">
          <Icon icon={faArrowUp} className="text-[#EC5252] "/>
            <Link to="/started" className="font-semibold">Started</Link>
          </li>
          <li className="flex gap-1.5 mt-5 cursor-pointer items-center hover:text-[#EC5252] duration-150">
          <Icon icon={faArrowDown} className="text-[#EC5252] "/>
            <Link to="/delayed" className="font-semibold">Delayed</Link>
          </li>
          <li className="flex gap-1.5 mt-6 cursor-pointer items-center hover:text-[#EC5252] duration-150">
          <Icon icon={faCheckCircle} className="text-[#EC5252] "/>
           
            <Link to="/completed" className="font-semibold">Completed</Link>
          </li>
               <li className="flex gap-1.5 mt-6 cursor-pointer items-center hover:text-[#EC5252] duration-150">
               <Icon icon={faCancel} className="text-[#EC5252] "/>
            <Link to="/cancelled" className="font-semibold">Cancelled</Link>
          </li>
          <li className="flex gap-1.5 mt-6 cursor-pointer items-center hover:text-[#EC5252] duration-150">
               <Icon icon={faCancel} className="text-[#EC5252] "/>
            <Link to="/stats" className="font-semibold">Stats</Link>
          </li>
          <Link to="/createproject">
          <button className="flex items-center gap-2  mt-5 bg-[#EC5252] px-4 rounded-full py-1.5 text-white">
           Create <Icon icon={faPlus}/>
          </button>
          </Link>
        </ul>
      </div>
    </div>
    <main className="py-4  w-full">
      <nav className="flex justify-between px-10 bg-white py-6">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
          <input
            type="text"
            placeholder="Search for projects"
            className="bg-gray-100 outline-none w-full"
          />
          <Icon
            icon={faSearch}
            className="h-5 w-5 cursor-pointer text-gray-500"
            
            style={{width:"17px"}}
          />
            
          
        </div>
        <div className="flex items-center">
          <img
            className="w-8 rounded-full"
            src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f770399eN164LEoG6Wj4HvB88nE2r8c1Wzupwc_xl.jpg"
            alt="user"
          />
          <p>Elon Musk</p>
        </div>
      </nav>
      <div className="w-full ">
        {/* <h1 className="text-2xl font-semibold">
          All Projects
          
        </h1> */}
        
        <Routes>
         <Route path="/all" element={<All projects={projects} setProject={setProject}/>}/>
         <Route path="/pending" element={<Pending projects={projects} setProject={setProject}/>}/>
         <Route path="/delayed" element={<Delayed projects={projects} setProject={setProject}/>}/>
          <Route path="/started" element={<Started projects={projects} setProject={setProject}/>}/>
           <Route path="/completed" element={<Completed/>}/>
            <Route path="/cancelled" element={<Cancelled/>}/>
            <Route path="/createproject" element={<CreateProject updateProjects={updateProjects} setAlsoProjects={setAlsoProjects}/>}/>
        <Route path="/project details" element={<ProjectDetails project={project} setProject={setProject} updateProjects={updateProjects} projects={projects}/>}/>
        <Route path="/stats" element={<Stats projects={projects}/>}/>
        </Routes>
      </div>
    </main>
  </div>
    </>


    </div>
  )
}

export default App