import React,{useState} from 'react'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
import {Button} from '@material-ui/core'
import { deletePost,likePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';
import moment from 'moment'

import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

const Post = ({post,setId,setIsVisible}) => {
 const user = JSON.parse(localStorage.getItem('profile'))
 const dispatch = useDispatch()

 const Likes = () => {
  if(post.likes.length > 1) {
return post.likes.find(like => (like === (user?.result?.googleId || user?.result?._id))) ? 
 <div className="flex items-center cursor-pointer  text-blue-600 gap-1 active:scale-110" style={{fontSize:"0.9em"}}

>
<ThumbUpAltIcon fontSize="small"/>
<span className="mt-1">{`You and ${post.likes.length - 1} other${post.likes.length > 2 ? 's':''}`}</span>
</div> :  <div className="flex items-center cursor-pointer  text-blue-600 gap-1 active:scale-110" style={{fontSize:"0.9em"}}
    
    >
   <ThumbUpAltIcon fontSize="small"/>
   <span className="mt-1">{post.likes.length}</span>
   </div>
  }

  else {
return (
 <div  className="flex items-center cursor-pointer  text-blue-600 gap-1 active:scale-110" style={{fontSize:"0.9em"}}
    
    >
   
   <ThumbUpAltIcon fontSize="small"/>
  { post.likes.length === 1 && <span className="mt-1">{post.likes.length}</span> }
   </div>
)
  }
 }

 return (

  <div className="rounded-lg  shadow-lg relative inline-block bg-white max-w-sm" style={{width:"330px",transform:"scale(0.95,0.95)"}}>
  <div className="flex justify-between text-white px-6 py-5 absolute w-full" style={{zIndex:1}}>
  <p className="font-semibold" style={{fontSize:"1em"}}>{post.name}<div style={{marginTop:"-5px"}}><small>{moment(post.createdAt).fromNow()}</small></div></p>
 
  {(user?.result?.sub === post.creator || user?.result?._id === post.creator) && <div className="group  text-[#222222]">
    
    <Icon icon={faEllipsis} className="cursor-pointer text-white" style={{fontSize:"1.3em"}}/> 
      
   
    <ul
      className="cursor-pointer z-50 right-2.5 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
 
    >
      <li className="rounded-sm px-3 py-1 hover:bg-gray-100 active:bg-gray-300" onClick={() => {setId(post._id)
      setIsVisible(true)}}>Edit</li>
      <li className="rounded-sm px-3 text-[#d63031] py-1 hover:bg-gray-100 active:bg-gray-300" onClick={() => {dispatch(deletePost(post._id))}}>Delete</li>
     
    </ul>
  </div>
  }

 </div>
  
    <img className="rounded-t-lg p-i" style={{filter:"brightness(70%)"}}  src={post.selectedFile}
 alt= {`post by ${post.name}`}/>
  
  <div className="p-6">
  <p className="mb-3 text-sm text-gray-500">{post.tags[0].split(',').map(tag => (`#${tag} `))}</p>
    <h5 className="text-gray-900 text-xl tracking-wide font-medium mb-2" style={{fontSize:"1.4em"}}>{post.title}</h5>
    <p className="text-gray-700 text-sm mb-4">
    {post.message}
    </p>

    <Button size="small" 
    disabled = {!user?.result}
    style={{fontSize:"0.9em",color:"rgb(37 99 235)",display:'flex',justifyContent:'left',borderRadius:'20px',textTransform:'lowercase'}}
    onClick={() => dispatch(likePost(post._id))}
    >

   <Likes/>

  </Button>
  </div>
  </div>
 
 )
}

export default Post