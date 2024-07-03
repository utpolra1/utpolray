import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillStar } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="flex items-center justify-between min-h-16 w-[80%] bg-purple-950 shadow-md fixed top-0 z-50 rounded-b-md">
      <div className="flex">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src="https://avatars.githubusercontent.com/u/99748784?v=4" className="h-10 mr-2" alt="brand" />
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost lg:hidden" onClick={() => setExpand(!expand)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul className={`menu menu-horizontal p-0 ${expand ? "" : "hidden lg:flex"}`}>
          <li className="text-white"><Link to="/" onClick={() => setExpand(false)}><AiOutlineHome className="mr-1 text-white" /> Home</Link></li>
          <li className="text-white"><Link to="/about" onClick={() => setExpand(false)}><AiOutlineUser className="mr-1" /> About</Link></li>
          <li className="text-white"><Link to="/project" onClick={() => setExpand(false)}><AiOutlineFundProjectionScreen className="mr-1" /> Projects</Link></li>
          <li className="text-white"><Link to="/resume" onClick={() => setExpand(false)}><CgFileDocument className="mr-1" /> Resume</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
