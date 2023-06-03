import mongoose from "mongoose"

const projectSchema = mongoose.Schema({
name: String,
description: String,
startDate: String,
endDate: String,  
budget: Number,
category: String
})

const projectData = mongoose.model("projectData",projectSchema)

export default projectData