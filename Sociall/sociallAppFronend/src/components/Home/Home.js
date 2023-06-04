import React,{useState,useEffect} from 'react'
import Paginate from '../Pagination/Pagination'
import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import {useDispatch} from 'react-redux'
import { getPosts } from '../../actions/posts'
import { useSelector } from 'react-redux'
import { useLocation,useNavigate} from 'react-router-dom'

function useQuery() {
 return new URLSearchParams(useLocation().search);
}

const Home = () => {
 const posts = useSelector((state) => state.posts)
 const [id,setId] = useState(null)
const dispatch = useDispatch()
// const query = useQuery()
const navigate = useNavigate()
// const page = query.get('page')
// const searchQuery = query.get('searchQuery')
const [isVisible,setIsVisible] = useState(false)
useEffect(() => {
 dispatch(getPosts())
},[dispatch])

  return (
    <>
    <button type="button" onClick={() => setIsVisible(prev => (!prev))} className=" inline-block px-4 py-3 bg-blue-600 text-white font-medium text-sm leading-tight  rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
 Create memory
</button>
     <div className="">
 <Posts setId={setId} setIsVisible={setIsVisible}/>

  {/* {posts.length && <div className="bg-white shadow rounded-lg" role="navigation" >
    <div className="container mx-auto p-4">
    <Paginate/>
    </div>
  </div>} */}


 
 <Form setId={setId} isVisible={isVisible} setIsVisible={setIsVisible} id={id}/>
</div>

    </>
  )
}

export default Home