import React from 'react'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {TextField} from '@material-ui/core'


const Input = ({name,type,handleChange,handleShowPassword,placeholder,data,autofocus}) => {

 return ( 
<div className="flex items-center">
   <TextField
   type={type}
   variant='outlined'
   required
   fullWidth
   label={placeholder}
   name={name}
   autoFocus={autofocus}
   size="small"
   onChange={handleChange}
   
 />
 {name === 'password' && data.password && <Icon icon={type==='password' ? faEye : faEyeSlash} onClick={handleShowPassword} style={{position:'relative',zIndex:1,marginLeft:'-30px',color:'grey',cursor:'pointer'}}/>}
 </div>
 
 )
  
}

export default Input