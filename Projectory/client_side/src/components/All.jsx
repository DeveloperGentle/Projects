import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectComp from './ProjectComp'
import { FormControl,Button, InputLabel, Select, MenuItem, FormHelperText} from '@mui/material'
import {makeStyles} from "@material-ui/core/styles"
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@mui/material/CircularProgress'


const All = ({projects,setProject, setIsUpdate, message, showSnackbar, severity, open, setOpen, fetchError}) => {
 const [selected, setSelected] = useState('All');

 const selectionChangeHandler = (event) => {
   setSelected(event.target.value);
 };

 useEffect(() => {

  setIsUpdate(false)
  setProject({
  name:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"",
  category:""
 })
}, [])

function Alert(props) {
 return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MyComponent() {
 

 const handleSnackbarClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }

   setOpen(false);
 };



 return (
  <div>
  
  <Snackbar open={open} autoHideDuration={3500} onClose={handleSnackbarClose}>
    <Alert onClose={handleSnackbarClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
</div>
 )

 }
 // const useStyles = makeStyles((theme) => ({
 //  select: {
 //   '&:focus': {
    
 //    borderColor: '#EC5252'
 //   }
 //  }
 // }))
// {classes.select}
 // const classes = useStyles()
  return (
   <>
   <div style={{display:"flex", alignItems:"center", marginTop:10,marginLeft:10,marginBottom:15, gap: 15}}>
   
       <FormControl>
       <FormHelperText><div>Select a category</div></FormHelperText>
      <Select value={selected} onChange={selectionChangeHandler}>
        <MenuItem value="All"><div>All</div></MenuItem>
        <MenuItem value="Started"><div>Started</div></MenuItem>
        <MenuItem value="Pending"><div>Pending</div></MenuItem>
        <MenuItem value="Delayed"><div>Delayed</div></MenuItem>
        <MenuItem value="Completed"><div>Completed</div></MenuItem>
      </Select>
      
    </FormControl>
    
    
    <Link to="/createProject"><Button variant="contained" endIcon='' size="large" style={{background: "#EC5252", padding: "6px 15px", color: "white"}}>
 <div>Create project</div>
</Button></Link>
</div>
 
{projects.length === 0 && !fetchError ? <div style={{color:"#EC5252"}}><CircularProgress color="inherit"/></div> : projects.length === 0 && fetchError ? fetchError : (selected === 'All' ? 
projects.map(project => (<ProjectComp key={project._id} setProject={setProject} project={project}/>))
 : projects.filter(p => (p.category === selected)).map(project => ( <ProjectComp key={project._id} setProject={setProject} project={project}/>))
)}

<MyComponent/>
 </>

   
   

 
  )
}
{/* if selected is not Pending , Started or All, then it has to be Delayed, for now     */}

export default All