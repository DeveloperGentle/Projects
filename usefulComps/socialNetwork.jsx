const Soial = () => {
 return (
<>
  {/* component */}
  {/* MDI Icons */}
  <link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .red-dot {\n        height: 10px;\n        width: 10px;\n    }\n\n    .red-dot-count {\n        font-size: 8px;\n        right: -11px;\n        top: -5px;\n    }\n\n    .story-ring {\n        padding: 2px;\n    }\n\n    .story-text {\n        font-size: 13px;\n    }\n\n    .post-container {\n        height: 650px !important;\n        overflow: hidden;\n        padding-right: 10px;\n    }\n\n    .post-container:hover {\n        overflow: auto;\n        padding-right: 0px;\n    }\n\n    .post-container::-webkit-scrollbar {\n        width: 10px;\n        height: 10px;\n    }\n\n    .post-container::-webkit-scrollbar-track {\n        border-radius: 100vh;\n        background: #edf2f7;\n    }\n\n    .post-container::-webkit-scrollbar-thumb {\n        background: #cbd5e0;\n        border-radius: 100vh;\n        border: 3px solid #edf2f7;\n    }\n\n    .post-container::-webkit-scrollbar-thumb:hover {\n        background: #a0aec0;\n    }\n"
    }}
  />
  {/* Page Container */}
    <div className="flex justify-center">
     
      <div className="py-7">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="flex flex-col relative">
            {/* App Header */}
            <div className="flex mb-5 border-b items-center pb-5 border-gray-100">
              <div className="flex-1">
                {/* Logo */}
                <img src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png" />
              </div>
              <div className="flex-1 w-64" />
              {/* Notification Area */}
              <div className="flex-1 w-full">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-end-7">
                    <div className="relative flex space-x-5 place-items-end">
                      {/* Notifications Button */}
                      <div className="relative">
                        {/* Red Dot */}
                        <div className="red-dot p-1 absolute right-0 bg-red-400 rounded-full cursor-pointer"></div>
                        <button
                          className="p-1 border border-gray-200 rounded-full 
                                          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                          transition-all duration-150 delay-100"
                        >
                          <i className="mdi mdi-bell-outline mdi-18px mx-1 text-gray-500" />
                        </button>
                      </div>
                      {/* Messages Button */}
                      <div className="relative">
                        {/* Red Dot With Counts */}
                        <div className="red-dot-count p-1 absolute right-0 bg-red-400 rounded-full text-white  cursor-pointer">
                          99+
                        </div>
                        <button
                          className="p-1 border border-gray-200 rounded-full
                                          hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                          transition-all duration-150 delay-100"
                        >
                          <i className="mdi mdi-message-reply-outline mdi-18px mx-1 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Story Bar Section */}
            <div className="flex mb-5 border-b pb-5 border-gray-100">
              {/* Story Bar */}
              <ul className="flex items-center justify-center space-x-2">
                {/* Add Story */}
                <li className="flex flex-col items-center space-y-2">
                  {/* Ring */}
                  <div
                    className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                  >
                    <a className="block bg-white p-1 rounded-full" href="#">
                      {/* Thumbnail */}
                      <img
                        className="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      />
                    </a>
                    <button
                      className="absolute transition duration-500 bg-white border-gray-400 
                                  h-8 w-8 rounded-full text-white border-2 
                                  border-white flex justify-center items-center opacity-80
                                  hover:opacity-60"
                    ></button>
                    <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500" />
                  </div>
                  {/* Story Text */}
                  <span className="story-text font-medium">You</span>
                </li>
                {/* Story #1 */}
                <li className="flex flex-col items-center space-y-2">
                  {/* Ring */}
                  <div
                    className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                  >
                    <a className="block bg-white p-1 rounded-full" href="#">
                      {/* Thumbnail */}
                      <img
                        className="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      />
                    </a>
                  </div>
                  {/* Story Text */}
                  <span className="story-text">jett</span>
                </li>
                {/* Story #2 */}
                <li className="flex flex-col items-center space-y-2">
                  {/* Ring */}
                  <div
                    className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                  >
                    <a className="block bg-white p-1 rounded-full" href="#">
                      {/* Thumbnail */}
                      <img
                        className="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      />
                    </a>
                  </div>
                  {/* Story Text */}
                  <span className="story-text">sky</span>
                </li>
                {/* Story #3 */}
                <li className="flex flex-col items-center space-y-2">
                  {/* Ring */}
                  <div
                    className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100"
                  >
                    <a className="block bg-white p-1 rounded-full" href="#">
                      {/* Thumbnail */}
                      <img
                        className="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      />
                    </a>
                  </div>
                  {/* Story Text */}
                  <span className="story-text">omen</span>
                </li>
                {/* Story #4 */}
                <li className="flex flex-col items-center space-y-2">
                  {/* Ring */}
                  <div
                    className="story-ring flex justify-center items-center
                              bg-gradient-to-tl from-yellow-200 to-orange-500 
                              rounded-full relative cursor-pointer
                              hover:from-orange-300 hover:to-red-400
                              transition-all duration-150 delay-100 
                              hover:animate-pulse"
                  >
                    <a className="block bg-white p-1 rounded-full" href="#">
                      <img
                        className="w-16 rounded-full"
                        src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      />
                    </a>
                  </div>
                  {/* Story Text */}
                  <span className="story-text">sage</span>
                </li>
              </ul>
            </div>
            {/* Post Section */}
            <div className="post-container flex flex-col mb-20 pb-3 flex-grow h-full">
              {/* Post */}
              <div
                className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
              >
                {/* Post Item */}
                <img
                  className="h-full w-full rounded-3xl"
                  src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                {/* Post Owner */}
                <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                  <a href="#" className="flex p-1.5 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                    />
                    <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                      EgoistDeveloper
                    </div>
                  </a>
                </div>
                {/* Post Counts */}
                <div
                  className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
                >
                  <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                    <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                    23K
                  </div>
                  <div className="flex text-gray-600 font-light text-lg text-gray-50">
                    <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                    1.4K
                  </div>
                  <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                    <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                  </div>
                </div>
              </div>
              {/* Post */}
              <div
                className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
              >
                {/* Post Item */}
                <img
                  className="h-full w-full rounded-3xl"
                  src="https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                {/* Post Owner */}
                <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                  <a href="#" className="flex p-1.5 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                    />
                    <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                      EgoistDeveloper
                    </div>
                  </a>
                </div>
                {/* Post Counts */}
                <div
                  className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
                >
                  <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                    <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                    23K
                  </div>
                  <div className="flex text-gray-600 font-light text-lg text-gray-50">
                    <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                    1.4K
                  </div>
                  <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                    <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                  </div>
                </div>
              </div>
              {/* Post */}
              <div
                className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
              >
                {/* Post Item */}
                <img
                  className="h-full w-full rounded-3xl"
                  src="https://images.unsplash.com/photo-1612405199572-aa74dfbad7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                {/* Post Owner */}
                <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                  <a href="#" className="flex p-1.5 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                    />
                    <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                      EgoistDeveloper
                    </div>
                  </a>
                </div>
                {/* Post Counts */}
                <div
                  className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
                >
                  <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                    <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                    23K
                  </div>
                  <div className="flex text-gray-600 font-light text-lg text-gray-50">
                    <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                    1.4K
                  </div>
                  <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                    <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                  </div>
                </div>
              </div>
              {/* Post */}
              <div
                className="story-ring flex justify-center items-center
                      relative cursor-pointer mb-6
                      transition-all duration-150 delay-100"
              >
                {/* Post Item */}
                <img
                  className="h-full w-full rounded-3xl"
                  src="https://images.unsplash.com/photo-1517442952015-85a8427cd6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                />
                {/* Post Owner */}
                <div className="left-4 top-4 absolute backdrop-blur-lg rounded-xl border border-gray-300">
                  <a href="#" className="flex p-1.5 px-3">
                    <img
                      src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
                      className="mr-2 w-8 h-8 rounded-full border border-gray-400"
                    />
                    <div className="text-gray-600 font-bold text-sm text-gray-50 hover:underline mt-1">
                      EgoistDeveloper
                    </div>
                  </a>
                </div>
                {/* Post Counts */}
                <div
                  className="flex mx-auto bottom-10 absolute backdrop-blur-md rounded-xl p-2
                          hover:backdrop-blur-xl transition-all duration-150 delay-100"
                >
                  <div className="flex text-gray-600 font-light text-lg text-gray-50 mx-6">
                    <i className="mdi mdi-heart-half-full mdi-24px text-gray-100 mr-2" />
                    23K
                  </div>
                  <div className="flex text-gray-600 font-light text-lg text-gray-50">
                    <i className="mdi mdi-comment-processing-outline mdi-24px text-gray-100 mr-2" />
                    1.4K
                  </div>
                  <div className="text-gray-600 font-light text-lg text-gray-50 mx-4">
                    <i className="mdi mdi-bookmark-outline mdi-24px mx-1 text-gray-100 mt-3" />
                  </div>
                </div>
              </div>
            </div>
            {/* Navigation Bar */}
            <div className="absolute -bottom-1 -left-2 w-full">
              <div className="px-7 pt-3 bg-white shadow-lg rounded-2xl">
                <div className="flex justify-center space-x-3">
                  {/* Item #1 */}
                  <div className="flex group">
                    <a
                      href="#"
                      className="p-3 text-gray-400 hover:text-yellow-500"
                    >
                      <span className="flex flex-col items-center">
                        {/* Icon */}
                        <i
                          className="mdi mdi-home-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                        />
                        {/* Text */}
                        <span className="text-xs mb-2 transition-all duration-200">
                          Home
                        </span>
                        {/* Focus Dot */}
                        <span
                          className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                        />
                      </span>
                    </a>
                  </div>
                  {/* Item #2 */}
                  <div className="flex group">
                    <a
                      href="#"
                      className="p-3 text-gray-400 hover:text-yellow-500"
                    >
                      <span className="flex flex-col items-center">
                        {/* Icon */}
                        <i
                          className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                        />
                        {/* Text */}
                        <span className="text-xs mb-2 transition-all duration-200">
                          Explore
                        </span>
                        {/* Focus Dot */}
                        <span
                          className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                        />
                      </span>
                    </a>
                  </div>
                  {/* Item #3 Active */}
                  <div className="flex group">
                    <a
                      href="#"
                      className="p-3 text-yellow-500 hover:text-yellow-500"
                    >
                      <span className="flex flex-col items-center">
                        {/* Icon */}
                        <i
                          className="mdi mdi-layers-outline mdi-24px mx-1 text-gray-700 group-hover:text-gray-700
                                      transition-color duration-200"
                        />
                        {/* Text */}
                        <span className="text-xs mb-2 transition-all duration-200">
                          Feeds
                        </span>
                        {/* Focus Dot */}
                        <span
                          className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
                                      hover:h-3 hover:w-3 transition-all duration-150 delay-100"
                        />
                      </span>
                    </a>
                  </div>
                  {/* Item #4 */}
                  <div className="flex group">
                    <a
                      href="#"
                      className="p-3 text-gray-400 hover:text-yellow-500"
                    >
                      <span className="flex flex-col items-center">
                        {/* Icon */}
                        <i
                          className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                        />
                        {/* Text */}
                        <span className="text-xs mb-2 transition-all duration-200">
                          Cart
                        </span>
                        {/* Focus Dot */}
                        <span
                          className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                        />
                      </span>
                    </a>
                  </div>
                  {/* Item #5 */}
                  <div className="flex group">
                    <a
                      href="#"
                      className="p-3 text-gray-400 hover:text-yellow-500"
                    >
                      <span className="flex flex-col items-center">
                        {/* Icon */}
                        <i
                          className="mdi mdi-account-circle-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700
                                      transition-color duration-200"
                        />
                        {/* Text */}
                        <span className="text-xs mb-2 transition-all duration-200">
                          Account
                        </span>
                        {/* Focus Dot */}
                        <span
                          className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                                      transition-all duration-150 delay-100"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</>


 )
}

export default Social