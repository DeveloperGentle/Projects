import React,{useState} from 'react'

const CreateProject = ({updateProjects,setAlsoProjects}) => {

 const [project,setProject] = useState({
  name:"",
  description:"",
  startDate:"",
  endDate:"",
  budget:"none"
 })

 

const getInput = (e) => {
 setProject(prevProject => ({...prevProject,[e.target.name]:e.target.value}))
 
}
 const handleSubmit = (e) => {
 e.preventDefault()
  updateProjects(prevProjects => ([...prevProjects,project]))
  setAlsoProjects(prevProjects => ([...prevProjects,project]))
 }
  return (
    
    
  
  
    <div className="max-w-2xl pt-5 ml-20">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div className="p-6 bg-white border-b border-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label style={{fontSize:"1.1em"}} className=" text-gray-600">
                Project Name <span className="text-red-500">*</span>
              </label>
              <br />
              <input
              onChange={getInput}
                type="text"
                className="border-2 outline-none  border-gray-300 p-2 mt-1 w-full"
                name="name"
                id="name"
                defaultValue=""
                required
              />
            </div>
            <div className="mb-4">
              <label style={{fontSize:"1.1em"}} className=" text-gray-600">Description</label>
              <br />
              <textarea
               onChange={getInput}
                className="border-2 outline-none border-gray-300 p-2 mt-1 w-full"
                name="description"
                id="description"
                placeholder="(Optional)"
              />
            </div>
            <div className="mb-4">
              <label style={{fontSize:"1.1em"}} className=" text-gray-600">Start date</label>
              <br />
              <input
              onChange={getInput}
               type="date"
                className="border-2 cursor-pointer outline-none border-gray-300 p-2 mt-1 w-full"
                name="startDate"
                id="description"
               
              />
            </div>
            <div className="mb-4">
              <label style={{fontSize:"1.1em"}} className=" text-gray-600">End date</label>
              <br />
              <input
              onChange={getInput}
               type="date"
                className="border-2 cursor-pointer outline-none border-gray-300 p-2 mt-1 w-full"
                name="endDate"
                id="description"
               
              />

            </div>
            <div className="mb-4">
              <label style={{fontSize:"1.1em"}} className=" text-gray-600">Budget</label>
              <br />
              <input
              onChange={getInput}
               type="text"
                className="border-2 outline-none border-gray-300 p-2 mt-1 w-full"
                name="budget"
                id="budget"
               placeholder="e.g. $1000"
              />
            </div>
            <div className="mb-4">
            <button  style={{fontSize:"1.1em"}} className="flex items-center gap-2  mt-5 bg-[#EC5252] px-5 rounded-full py-3 text-white">
           Submit
          </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  


    
  )
}

export default CreateProject