export default function ResCard(props) {
    return (
         


<div className="flex">
  <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.img}alt={props.alt} />
    <div className="p-6 flex flex-col justify-start">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
      <p className="text-gray-700 text-base mb-4">
        {props.desc}
      </p>
     
      <p className="text-gray-600 text-xs">Last updated {} mins ago</p>
      <div className="flex flex-wrap mt-5  space-x-2">
  <span
    className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    #text
  </span>

  <span
    className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
    #text
    <button className="bg-transparent hover focus:outline-none">
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
        class="w-3 ml-3" role="img" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512">
        <path fill="currentColor"
          d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
        </path>
      </svg>
    </button>
  </span>
</div>
    </div>
  </div>
</div>
    )
}