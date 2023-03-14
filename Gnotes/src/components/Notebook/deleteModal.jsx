import React from 'react';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import '../component.css';

const DeleteModal = ({notes,backUpNotes,updateNotes,setBackupNotes,wantsToDelete,setWantsToDelete,setWantsToEdit,callBackValue,setCallbackValue}) => {
  return (
   <div className='flex justify-center'>
    <div className={wantsToDelete ? 'noteDeleteModal visibleModal':'noteDeleteModal hiddenModal'}>
     <div style={{position:'relative',bottom:'-15px',left:'15px'}}>
    <Icon icon={faXmark} onClick={() => setWantsToDelete(false)} size='xl' title='cancel' style={{color:'#128f46',cursor:'pointer'}} />
    </div>
    <div className="flex flex-col justify-center items-center gap-14 mt-10">
     <h1>Delete note?</h1>
     <div className="flex justify-center items-center gap-12"><button onClick={() => setWantsToDelete(false)} className="cancelDeleteBtn">Cancel</button><button className="deleteBtn"  onClick={() => {
       
       
       notes.splice(notes.indexOf(callBackValue),1)
       backUpNotes.splice(backUpNotes.indexOf(callBackValue),1)
       setWantsToEdit(false)
 
       updateNotes(prevNotes => ([...prevNotes]))
       setWantsToDelete(false)}}>Delete</button></div>
    </div>
    </div>
    </div>
  )
}

export default DeleteModal;