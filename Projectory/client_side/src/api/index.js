import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:7000' })

export const fetchProjects = () => API.get('/projects')
export const createProject = (newProject) => API.post('/projects',newProject)
export const updateProject =  (id,newProject) => API.patch(`/projects/${id}`,newProject)
export const terminateProject = (id) => API.delete(`/projects/${id}`)

export const signIn = (formData) => API.post('/user/signIn',formData)
export const signUp = (formData) => API.post('/user/signUp',formData)
// export const likePost = (id) => API.patch(`/projects/${id}/likePost`)
