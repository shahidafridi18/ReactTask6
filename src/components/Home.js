import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../components/assets/IMG20220327073739.jpg';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#0a192f]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a CSE Student,
          </h3>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a Computer Science & Engineering student with a strong interest in web development. I love working on web applications and have experience with technologies like HTML, CSS, JavaScript, React, and more. I'm enthusiastic about building creative and user-friendly websites. Currently, I am pursuing my degree at VIT-AP university.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={20} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto h-56 w-56 md:h-64 md:w-64"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
