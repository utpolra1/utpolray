import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const showSection = (section) => {
    // Implement logic to show/hide sections based on section parameter
    console.log(`Showing ${section} section`);
    setShowDropdown(false); // Close dropdown after clicking a link
  };

  return (
    <div className="navbar bg-purple-950 fixed top-0 w-[85.5%] lg:w-[80.1%] z-50">
      <div className="navbar-start">
        <div className="dropdown relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            className={`menu menu-sm dropdown-content bg-purple-950 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute lg:static ${showDropdown ? "block" : "hidden"}`}
          >
            <li className="text-white">
              <Link to="/" onClick={() => showSection('home')}>
                <AiOutlineHome className="mr-1 text-white" /> Home
              </Link>
            </li>
            <li className="text-white">
              <Link to="/about" onClick={() => showSection('about')}>
                <AiOutlineUser className="mr-1" /> About
              </Link>
            </li>
            <li className="text-white">
              <Link to="/project" onClick={() => showSection('projects')}>
                <AiOutlineFundProjectionScreen className="mr-1" /> Projects
              </Link>
            </li>
            <li className="text-white">
              <Link to="/resume">
                <CgFileDocument className="mr-1" /> Resume
              </Link>
            </li>
          </ul>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/99748784?v=4"
          className="h-10 mr-2"
          alt="brand"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-white">
            <Link to="/" onClick={() => showSection('home')}>
              <AiOutlineHome className="mr-1 text-white" /> Home
            </Link>
          </li>
          <li className="text-white">
            <Link to="/about" onClick={() => showSection('about')}>
              <AiOutlineUser className="mr-1" /> About
            </Link>
          </li>
          <li className="text-white">
            <Link to="/project" onClick={() => showSection('projects')}>
              <AiOutlineFundProjectionScreen className="mr-1" /> Projects
            </Link>
          </li>
          <li className="text-white">
            <Link to="/resume">
              <CgFileDocument className="mr-1" /> Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
