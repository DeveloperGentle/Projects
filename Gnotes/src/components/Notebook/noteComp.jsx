import React from 'react';
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import '../component.css';

// {/* <div className='flex justify-center'>
// <div className={wantsToDelete ? 'noteDeleteModal visibleModal flex flex-col justify-center items-center gap-12' : 'noteDeleteModal hiddenModal flex flex-col justify-center items-center gap-12'}><h1 className='flex justify-center items-center mt-10'>Delete note?</h1>
// <div className='flex justify-between gap-14 items-center btnDCon'><button className='cancelBtn' onClick={setWantsToDelete(false)}>Cancel</button><button className='deleteBtn' onClick={ () => {notes.splice(notes.indexOf(callBackValue),1)
//    backUpNotes.splice(backUpNotes.indexOf(callBackValue),1)
//    updateNotes(prevNotes => ([...prevNotes]))
//   }}>Delete</button></div>
// </div>
// </div> */}
const Note = ({note,setWantsToDelete,backUpNotes,setEditValue,setCallbackValue,setWantsToEdit,updateNotes}) => {
 
const date = new Date().toDateString()
 return (
   <div style={ {
    minHeight: '120px',
    }}  key={backUpNotes.indexOf(note)}>
 <div className="collapse collapse-horizontal" id="collapseWidthExample">
   <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm" style={{width: '300px',paddingBottom:'10px'}}>
   {note} 
     <div className='flex gap-2 items-center iconsD mt-5' style={{marginLeft:'100px',width:'100%'}}><div style={{fontSize:'0.8em'}}>{date}</div>
     <Icon icon={faTrashCan} onClick={() => {
      setCallbackValue(note)
     setWantsToDelete(true)
     setWantsToEdit(false)}} title='delete note' style={{width:'20px',cursor:'pointer',color:'#128f46'}}/> 

       <Icon icon={faPen} title='edit note' onClick={() => {
        
        setEditValue(note);
        setCallbackValue(note);
        setWantsToEdit(true)
        setWantsToDelete(false)
       }}  style={{width:'20px',cursor:'pointer',color:'#128f46'}} alt='pen'/></div> 
   </div>
 </div>
 
</div>)
  
}

export default Note;