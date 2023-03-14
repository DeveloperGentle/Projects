import React from 'react'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import '../component.css';

const NoteEditor = ({wantsToEdit,editValue,setEditValue,editNote,setWantsToEdit}) => {
  return (
   <div className='flex justify-center'>
<div  className={wantsToEdit ? 'editModal visibleModal':'editModal hiddenModal'}>
 <div style={{position:'relative',bottom:'-35px',left:'15px'}}>
  <Icon icon={faXmark} onClick={() => setWantsToEdit(false)} size='xl' title='cancel' style={{color:'#128f46',cursor:'pointer'}} />
  </div>
<textarea onChange={(event) =>  setEditValue(event.target.value)}  value={editValue} className='toDoInput modalInput'/>
<button onClick={editNote} style={{backgroundColor:'#128f46',padding:'8px 13px',borderRadius:'50%',color:'#ffffff',position:'relative',right:'60px',bottom:'22px',cursor:'pointer'}}>
 <Icon icon={faPen} size='md' title='save note'/>
 </button>
</div>
</div>
  )
}

export default NoteEditor;