import React,{useState,useEffect} from 'react'
import FileBase from 'react-file-base64'
import {useDispatch,useSelector} from 'react-redux'
import { createPost,updatePost } from '../../actions/posts'
import {TextField} from '@material-ui/core'

const Form = ({id,setId,isVisible,setIsVisible}) => {
 const postToEdit = useSelector((state) => id ? state.posts.find(post => (post._id === id)):null)
 const dispatch = useDispatch()
 const user = JSON.parse(localStorage.getItem('profile'))
 const [postData, setPostData] = useState({
 
  title:'',
  message:'',
  tags:'',
  selectedFile:''
 })

 useEffect(() => {if(postToEdit) setPostData(postToEdit)},[postToEdit])

 const collectPostInput = (e) => setPostData({...postData,[e.target.name]:e.target.value})
 

 const handleSubmit = (e) => {
e.preventDefault()
if(id) dispatch(updatePost(id,{...postData,name: user?.result?.given_name ? user?.result?.given_name: user?.result?.name }))
else dispatch(createPost({...postData,name: user?.result?.given_name ? user?.result?.given_name: user?.result?.name }))

clear()
setIsVisible(false)
 }

 const clear = () => {
setPostData({
 
  title:'',
  message:'',
  tags:'',
  selectedFile:''
})
setId(null)
 }

  return (
   <>

 <div className="w-full flex justify-center h-full items-center">
   <section className={`w-full form-container ${!isVisible && 'not-visible'} fixed  lg:w-4/12 px-4 mx-auto pt-6`}
   style ={{bottom:"5vh"}}
   >
  
     <div style={{backgroundColor:""}} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl bg-blueGray-50 rounded-lg bg-white border-0">

<div className="mt-6 flex-auto px-4 lg:px-10 py-10 pt-0">
<h1 className="text-center mb-3 text-xl">{id ? `editing "${postToEdit?.title}"`:'Create a memory'}</h1>
         <form onSubmit={handleSubmit}>
           <div className="relative w-full mb-3">
           
           </div>
           <div className="relative w-full mb-3">
            
             <TextField
               type="text"
              label="Title"
              fullWidth
               variant="outlined"
               name="title"
               size="small"
               onChange={collectPostInput}
               value={postData.title}

             />
           </div>
           <div className="relative w-full mb-3">
          
             <TextField
              multiline
               minRows={5}
               className="border-0 resize-none px-3 py-3 placeholder-gray-400 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
               label="Message"
               name="message"
               size="small"
              variant="outlined"
              fullWidth
               onChange={collectPostInput}
               value={postData.message}
             />
           </div>
           <div className="relative w-full mb-3">
           
             <TextField
               type="text"
               label="Tags(comma separated)"
                 fullWidth
               variant="outlined"
               name="tags"
               size="small"
               onChange={collectPostInput}
               value={postData.tags}
             />
           </div>
           <div>
             
             <div className="text-sm cursor-pointer">
               <FileBase
                 
                 type="file"
                 multiple={false}
              
               onDone = {({base64}) => setPostData({...postData,selectedFile:base64})}
              

               />
             </div>
             
           </div>
           <div className="text-center mt-6">
             <button
               className="bg-blue-600 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
               type="submit"
             >
               
               Submit
             </button>
           </div>
           <div className="text-center mt-1">
             <button
               className="bg-red-500 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
               type="button" onClick={clear}
             >
               
               Clear
             </button>
           </div>
         </form>
       </div>
     </div>
   </section>
 </div>
 </>
  )
}

export default Form