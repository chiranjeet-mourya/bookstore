import React from "react";
import Bannerimg from "../../public/banner.png"
import {useTypewriter,Cursor } from 'react-simple-typewriter'
function Banner() {

  const [text] = useTypewriter({
    words: ['new everyday!!', 'Free Books!!', 'Paid Books!!', 'New Courses!!'],
    loop: 20,
    delaySpeed:1500,
    typeSpeed:150,
    deleteSpeed:150,
  })
  return (
    <>
      <div className="max-w-screen-2xl md:overflow-hidden container max-auto md:px-20 px-2 flex  justify-between flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learm something{" "}
              <span className="text-pink-800 dark:text-white">
                {text}
              </span>
              <Cursor/>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              molestiae dolore velit consectetur nihil vero, impedit explicabo,
              totam harum iusto, beatae expedita ex. Eligendi expedita beatae
              molestiae, sequi nulla porro?
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className="btn mt-7 btn-secondary bg-pink-800">View Now</button>
        </div>
        <div className="w-full order-1 md:w-1/2">
        <img src={Bannerimg} className="w-85 h-85" alt="" /></div>
      </div>
    </>
  );
}

export default Banner;
