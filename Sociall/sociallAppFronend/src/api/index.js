import axios from 'axios'

const API = axios.create({ baseURL: 'https://sociall-20c2.onrender.com' })

API.interceptors.request.use((req) => {
 const profile = JSON.parse(localStorage.getItem('profile'))
 
 if(profile) {
  if(profile.token) req.headers.Authorization = `Bearer ${profile.token}`

  else req.headers.Authorization = profile.result.sub
 }

 return req
})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts',newPost)
export const updatePost =  (id,newPost) => API.patch(`/posts/${id}`,newPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData) => API.post('/user/signin',formData)
export const signUp = (formData) => API.post('/user/signup',formData)
