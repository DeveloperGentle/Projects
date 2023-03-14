import React, { useState,useEffect} from 'react';
import '../component.css';
import Note from './noteComp';
import NoteEditor from './editModal';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import DeleteModal from './deleteModal';


const  NotebookRendering = () => {
 

 
  const [notes,updateNotes] = useState(JSON.parse(localStorage.getItem('storedNotes')) || [])
  const [toDoInput,setToDo] = useState('');
  const [backUpNotes,setBackUpNotes] = useState(JSON.parse(localStorage.getItem('storedBackUpNotes')) || [])
  const [searchVal,setSVal] = useState('')
  const [warning,setWarning] = useState('')
  const [editValue,setEditValue] = useState('');
  const [callBackValue,setCallbackValue] = useState('')
  const [wantsToEdit,setWantsToEdit] = useState(false)
  const [wantsToDelete,setWantsToDelete] = useState(false)
 

const getToDoValue = (event) => {
    setToDo(event.target.value)
   
  }

const addNote = () => {
setWantsToDelete(false)
setWantsToEdit(false)

    if(toDoInput) {
    
    updateNotes(prevNotes => ([...prevNotes,toDoInput]))
    setBackUpNotes(prevN => ([...prevN,toDoInput]))
    setToDo('')
    setWarning('')

    }
else {
  
      setWarning('Note field cannot be empty.')
    }}

const SearchForNotes = (event) => {
      setSVal(event.target.value)
      updateNotes(backUpNotes.filter(backUpNote=>(backUpNote.includes(event.target.value))))
      }


const editNote = () => { 
   if(editValue) {
    
   notes.splice(notes.indexOf(callBackValue),1,editValue);
   backUpNotes.splice(backUpNotes.indexOf(callBackValue),1,editValue)
   updateNotes(prevNotes => ([...prevNotes]))
   setBackUpNotes(prevNotes => ([...prevNotes]))
   setEditValue('')
   setWantsToEdit(false)
    }
  }

  useEffect (() => {
   localStorage.setItem('storedNotes',JSON.stringify(notes))
   localStorage.setItem('storedBackUpNotes',JSON.stringify(backUpNotes))
  },[notes,backUpNotes])
  
  return (
    <main className='mt-10'>
     
     <NoteEditor
      wantsToEdit = {wantsToEdit}
      setEditValue={setEditValue}
      editValue = {editValue}
      editNote= {editNote}
     setWantsToEdit={setWantsToEdit}
      />
    
    <DeleteModal 
     callBackValue={callBackValue}
     setCallbackValue={setCallbackValue}
     notes={notes}
     backUpNotes={backUpNotes}
     updateNotes={updateNotes}
     setBackupNotes={setBackUpNotes}
     wantsToDelete={wantsToDelete}
     setWantsToDelete={setWantsToDelete}
     setWantsToEdit={setWantsToEdit}
     
    />
    <h1 className='text-3xl' style={{fontWeight:500}}>Gnotes</h1>
   
    <div className='flex lg:flex-row md:flex-row sm:flex-col gap-2 items-center mt-4'>
    <div><textarea style={{height:'90px'}} value={toDoInput} spellCheck={false} onFocus={() => {
     setWantsToDelete(false)
     setWantsToEdit(false)
    }}  placeholder='Take notes' onChange={getToDoValue}  id='focusInput' name="toDoInput" className='toDoInput'/></div>
    <div><button type='button' className='addNoteBtn flex gap-2 items-center' onClick={addNote}><span>New Note</span><Icon icon={faPen}/></button></div>
    </div>
    <p style={{color:'#d63031',fontSize:'0.8em', fontWeight:'600'}} className='mt-0'>{warning}</p>
    <p className='mt-3 flex items-center'><h1><Icon  icon={faSearch} style={{color:'#128f46',right:'-15px',zIndex:'+1',position:'relative'}} size='lg'/>
    </h1><input type='text' style={{marginLeft:'-20px',paddingLeft:'45px'}} spellCheck={false} onFocus={ () => {
      setWantsToDelete(false)
      setWantsToEdit(false)
    }} value={searchVal} placeholder='Search for notes...'  onChange={SearchForNotes}  className='toDoInput'/></p>
    
    <div className='flex justify-center'>{notes.length === 0 && <h1 className='text-3xl' style={{color:'#8c8c8c',marginTop:'70px'}}>No Notes</h1>}</div>

   <section className='container lg:mx-auto mt-5 grid justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-x-14 gap-y-5'>
    {notes.map(note => {
     
     return ( <Note
     note = {note}
     notes = {notes}
     backUpNotes = {backUpNotes}
     setEditValue = {setEditValue}
     setCallbackValue = {setCallbackValue}
     setWantsToEdit = {setWantsToEdit}
     setWantsToDelete={setWantsToDelete}
     updateNotes = {updateNotes}
    
      />)})}
</section>
</main>
)}

export default NotebookRendering;