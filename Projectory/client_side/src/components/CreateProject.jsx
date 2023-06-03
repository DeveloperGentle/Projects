import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {TextField, Button} from '@material-ui/core'
import { parseISO, isFuture, isPast, isToday, isBefore, isAfter, isSameDay } from 'date-fns'
import './components.css'


const CreateProject = ({createProject,updateProject,project,setProject,isUpdate,setIsUpdate}) => {

const navigate = useNavigate()
const getInput = (e) => {
 setProject(prevProject => ({...prevProject,[e.target.name]:e.target.value}))
 
}



const isStartDateBefore = (start, end) => isBefore(start,end) && !isSameDay(start,end)
const isStartDatePast = (start) => isPast(start) && !isToday(start)


const [error,setError] = useState({dateIsPast:"",endDateBefore:""})
 const handleSubmit = (e) => {
 e.preventDefault()
 
const start = parseISO(project.startDate)
 const end = parseISO(project.endDate)
 
 if (!isUpdate) {

if(!isStartDatePast(start) && isStartDateBefore(start,end)) {
 
 project.category = isFuture(start) ? 'Pending' : 'Started'

 if(isUpdate) { 

updateProject(project._id,project) 
setIsUpdate(false)

 }

 else {
  createProject(project)
 }


 setProject({
  name:"",
  category:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"none",
  category:""
 })

 setError({dateIsPast:"",endDateBefore:""})

 navigate('/all')
}

else if(isStartDatePast(start)) {
 setError(prevError => ({...prevError,endDateBefore:"",dateIsPast:"Project start date must be on or after current date"}))

 
}

else if(!isStartDateBefore(start,end)) {
 setError(prevError => ({...prevError,dateIsPast:"",endDateBefore:"Start date must be before end date"}))
}
}

else {
 if (isStartDateBefore(start,end)) {
  project.category = isFuture(start) ? 'Pending' : 'Started'

updateProject(project._id,project) 
setIsUpdate(false)



 setProject({
  name:"",
  category:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"none",
  category:""
 })

 setError({dateIsPast:"",endDateBefore:""})

 navigate('/all')
 }

 else if(!isStartDateBefore(start,end)) {
  setError(prevError => ({...prevError,dateIsPast:"",endDateBefore:"Start date must be before end date"}))
 }
}

 //set project back to initial empty values after creating or updating
 
 }


  return (
    
 <>
    <div className="max-w-2xl pt-5">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
             
              <TextField
                value={project.name}
                onChange={getInput}
                type="text"
                variant="outlined"
                name="name"
                fullWidth
                size="small"
                label="Title"
                autoFocus={true}
                required
              />
            </div>
            <div className="mb-4">
             
              <TextField
              value={project.description}
               multiline
               minRows={5}
               onChange={getInput}
               fullWidth
               // required
               variant="outlined"
                className="border-2 outline-none border-gray-300 p-2 mt-1 w-full"
                name="description"
                id="description"
                label="Description"//not optional for now
              />
            </div>
            <div className="mb-4">
             
              <TextField
              value={project.startDate}
               onChange={getInput}
               type="date"
               required
               fullWidth
               variant="outlined"
               size="small"
                name="startDate"
                error={Boolean(error.dateIsPast || error.endDateBefore)}
                helperText={error.dateIsPast ? error.dateIsPast : error.endDateBefore}
                label="Start date"
               
              />
            </div>
            <div className="mb-4">
              
              <TextField
              value={project.endDate}
              onChange={getInput}
               type="date"
                name="endDate"
                label="End date"
                required
               fullWidth
               variant="outlined"
               size="small"
                
               
              />

            </div>
            <div className="mb-4">
             
              <TextField
              value={project.budget}
              onChange={getInput}
               type="number"
               label="Budget"
                required
               fullWidth
               variant="outlined"
               size="small"
                name="budget"
                
              />
            </div>
            <div className="mb-4">
            <Button 
            variant="contained" 
            onClick={handleSubmit} 
            color="primary" 
            style={{background: "#EC5252"}}  
            type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
 
</>  

    
  )
}

export default CreateProject