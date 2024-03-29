export default function ReviewCard(props) {
    return (
      
      <div class="w-screen h-screen flex justify-center items-center px-2">
         <div
            class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden"
         >
            <div>
               <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
            </div>
            <div class="p-3 space-y-3">
               <h3 class="text-gray-700 font-semibold text-md">
                  {props.title}
               </h3>
               <p class="text-sm text-gray-900 leading-sm">
                  {props.desc}
               </p>
               <p>
                  <span class="flex">
                     <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-5 text-teal-600"
                     >
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                     </svg>
                     <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-5 text-teal-600"
                     >
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                     </svg>
                     <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-5 text-teal-600"
                     >
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                     </svg>
                     <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-5 text-teal-600"
                     >
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                     </svg>
                     <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        class="h-5 text-gray-200"
                     >
                        <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                     </svg>
                  </span>
               </p>
            </div>
            <button
               class="bg-teal-600 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
            >
               <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  class="h-6 mr-1 text-white"
               >
                  <path
                     d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                     clip-rule="evenodd"
                     fill-rule="evenodd"
                  ></path>
                  <path
                     d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  ></path></svg
               >reservation
            </button>
         </div>
      </div>)
}
