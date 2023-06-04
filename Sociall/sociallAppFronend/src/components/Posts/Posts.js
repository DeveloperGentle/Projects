import React from 'react'
import Post from './Post/Post.jsx'
import {useSelector} from 'react-redux'
import {CircularProgress} from '@material-ui/core'

const Posts = ({setId,setIsVisible}) => {
 const posts = useSelector((state) => state.posts)
 
  return (
   !posts.length ? <CircularProgress style={{color:'white'}}/>:
    <div>
{posts.map(post => (<Post key={post._id} setId={setId} setIsVisible={setIsVisible} post={post}/>))}
    </div>
  )
}

export default Posts