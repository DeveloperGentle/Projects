const Notify = () => {
 return (
  <>
  {/* component */}
  {/* start: Social Network notification:light */}
  <div className="w-full h-auto relative">
    <div className="bg-white  px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
      <div className="w-full flex items-center justify-between">
        <span className="font-medium text-sm text-slate-400">
          New Notification
        </span>
        <button className="-mr-1 bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-600 h-5 w-5 rounded-full flex justify-center items-center">
          <svg
            className="h-2 w-2 fill-current items-center"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center mt-2 rounded-lg px-1 py-1 cursor-pointer">
        <div className="relative flex flex-shrink-0 items-end">
          <img
            className="h-16 w-16 rounded-full"
            src="https://i.pravatar.cc/300"
          />
          <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-white" />
        </div>
        <div className="ml-3">
          <span className="font-semibold tracking-tight text-xs">John Doe</span>
          <span className="text-xs leading-none opacity-50">
            reacted to your comment:
          </span>
          <p className="text-xs leading-4 pt-2 italic opacity-70">
            "This is the comment..."
          </p>
          <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
            a few seconds ago
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* end: Social Network notification:light */}
  {/* start: Social Network notification:dark */}
  <div className="w-full h-auto relative">
    <div className="bg-slate-900 text-slate-100 mt-10 px-5 py-3.5 rounded-lg shadow hover:shadow-xl max-w-sm mx-auto transform hover:-translate-y-[0.125rem] transition duration-100 ease-linear">
      <div className="w-full flex items-center justify-between">
        <span className="font-medium text-sm">New Notification</span>
        <button className="-mr-1 bg-slate-800 hover:bg-slate-700/70 text-slate-400 hover:text-slate-200 h-5 w-5 rounded-full flex justify-center items-center">
          <svg
            className="h-2 w-2 fill-current items-center"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center mt-2 rounded-lg py-1 cursor-pointer">
        <div className="relative flex flex-shrink-0 items-end">
          <img
            className="h-16 w-16 rounded-full"
            src="https://i.pravatar.cc/300"
          />
          <span className="absolute h-4 w-4 bg-green-400 rounded-full bottom-0 right-0 border-2 border-slate-900" />
        </div>
        <div className="ml-3.5">
          <span className="font-semibold tracking-tight text-xs">John Doe</span>
          <span className="text-xs leading-none opacity-50">
            reacted to your comment:
          </span>
          <p className="text-xs leading-4 pt-2 italic opacity-70">
            "This is the comment..."
          </p>
          <span className="text-[10px] text-blue-500 font-medium leading-4 opacity-75">
            a few seconds ago
          </span>
        </div>
      </div>
    </div>
  </div>
  {/* end: Social Network notification:dark */}
</>

 )
}