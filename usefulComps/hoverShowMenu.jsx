const OnHover = () => {
 const [isVisible,setIsVisible] = useState(false)
 return (
  <>
{/* component */}
  {/* This empty div is only for demo purposes and it's used so you can close the menu on a touchscreen device. Normally you'd handle it differently by not using hover states on mobile, but by using real clicks. */}
  
  <div className="relative inline-block py-16 w-max">
    <button
    onMouseLeave={() => setIsVisible(false)} 
    onMouseOver={() => setIsVisible(true)}
      type="button"
      className="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline"
    >
      <span className="flex-shrink-0">Menu</span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        className="flex-shrink-0 w-5 h-5 ml-1"
      >
        <path
          className="transition duration-300 ease-in-out origin-center transform"
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  
      <div v-show="isVisible" onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)} 
         className="pt-2 relative" 
         style={{opacity: isVisible ? 1:0,visibility:isVisible ? 'visible':'hidden'}}>
        <div className="relative py-1  border border-gray-200 rounded-md">
          <div className="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none" />
          <div className="relative">
            <a
              href="#"
              className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
            >
              Submenu Link #1
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
            >
              Submenu Link #2
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
            >
              Submenu Link #3
            </a>
            <a
              href="#"
              className="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out"
            >
              Submenu Link #4
            </a>
          </div>
        </div>
      </div>
  
  </div>

</>

 )
}