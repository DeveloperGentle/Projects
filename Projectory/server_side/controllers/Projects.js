import projectData from "../models/Projects.js"
import mongoose from "mongoose"

export const getProjects = async (req,res) => {
 try {
  const projects = await projectData.find()
  res.status(200).json(projects)
 } catch (error) {
  res.status(404).json({message:error.message})
 }
}

export const createProject = async (req,res) => {
 const project = req.body
 const newProject = new projectData({...project})//include creator when working on auth
 try {
 await newProject.save()
 res.status(200).json(newProject)
 } catch (error) {
  res.status(404).json({message:error.message})
 }
}

export const updateProject = async (req,res) => {

 const { id:_id } = req.params
 const project = req.body
 if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No project with that id')
const updatedProjects = await  projectData.findByIdAndUpdate(_id,{...project,_id},{new : true})

res.json(updatedProjects)
}
// export const updatePost = async (req,res) => {
//  const { id:_id } = req.params
// const post = req.body
//  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
// const updatedPosts = await  PostMessage.findByIdAndUpdate(_id,{...post,_id},{new : true})

// res.json(updatedPosts)
// }

export const terminateProject =  async (req,res) => {
 const { id } = req.params
 if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No project with that id')
 try {
 await projectData.findByIdAndRemove(id)
 res.status(200).json({message:'Project terminated successfully'})
 }

 catch(error) {
  res.status(404).json({message:error.message})
 }
}