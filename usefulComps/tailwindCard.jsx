import React from 'react'

const TailwindCard = () => {
  return (
    <div>
     <>

  <link
    href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
    rel="stylesheet"
  />
  <div className="min-h-screen pb-10">
    <div className="w-full md:w-7/12 pt-5 px-4 mx-auto text-center">
      <div className="text-sm text-white py-1">
        This components requires
        <a
          href="#!"
          className="text-white font-semibold"
          target="_blank"
        >
          Material Tailwind CSS &amp; JS
        </a>
        for the shadows, ripple effects and card classes. <br />
        <br />A component by
        <a
          href="#!"
          className="text-white font-semibold"
          target="_blank"
        >
          Creative Tim
        </a>
        .
      </div>
    </div>
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <a href="https://www.material-tailwind.com" blur-shadow-image="true">
            <img
              className="w-auto rounded-lg"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="tailwind-card-image"
            />
          </a>
        </div>
        <div className="card-body">
          <a href="#">
            <h4 className="font-semibold">Material Design 3</h4>
          </a>
          <p className="opcacity-60 mb-4">
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out.
          </p>
          <button className="button button-pink" data-ripple-light="true">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default TailwindCard