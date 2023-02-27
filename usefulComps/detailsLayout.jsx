const DetailLayout = () => {
 return (
  <>
   {/* component */}
   {/* This is an example component */}
   <div className="min-h-screen flex items-center justify-center px-4">
     <div className="max-w-4xl  bg-white w-full rounded-lg shadow-xl">
       <div className="p-4 border-b">
         <h2 className="text-2xl ">Applicant Information</h2>
         <p className="text-sm text-gray-500">
           Personal details and application.
         </p>
       </div>
       <div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
           <p className="text-gray-600">Full name</p>
           <p>Jane Doe</p>
         </div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
           <p className="text-gray-600">Application for</p>
           <p>Product Manager</p>
         </div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
           <p className="text-gray-600">Email Address</p>
           <p>Janedoe@gmail.com</p>
         </div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
           <p className="text-gray-600">Salary</p>
           <p>$ 12000</p>
         </div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
           <p className="text-gray-600">About</p>
           <p>
             Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
             incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
             consequat sint. Sit id mollit nulla mollit nostrud in ea officia
             proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
             deserunt qui eu.
           </p>
         </div>
         <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
           <p className="text-gray-600">Attachments</p>
         <p>This is a placeholder...</p>
         </div>
       </div>
     </div>
  
   </div>
 </>
 )
}
export default DetailsLayout