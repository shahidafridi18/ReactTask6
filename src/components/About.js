import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-2 ">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hello, I'm Shahid Afridi, <br/>nice to meet you.<br/>
                Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "} 
                Welcome to my portfolio.I am CSE student with problem solving skills and passionate about creating web applications and have been exploring various technologies, including HTML, CSS, JavaScript, and React. My goal is to leverage my technical skills and creativity to build innovative and user-friendly web solutions.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;