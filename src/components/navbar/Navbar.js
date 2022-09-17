import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <h2 className="font-black text-transparent text-[2.5rem] bg-clip-text bg-gradient-to-r from-[#fe935e] to-[#f44845]">
            Speak.
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-[1.25rem] font-bold">Home</a>
            </li>

            <li>
              <a className="text-[1.25rem] font-bold">Features</a>
            </li>
            <li>
              <a className="text-[1.25rem] font-bold">Shop</a>
            </li>
            <li>
              <a className="text-[1.25rem] font-bold">About Us</a>
            </li>
            <li>
              <a className="text-[1.25rem] font-bold">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4 text-xl">
          <a className="hover:cursor-pointer hover:text-[#f44845]">
            <BsTwitter />
          </a>
          <a className="hover:cursor-pointer hover:text-[#f44845]">
            <FaLinkedinIn />
          </a>

          <a className="hover:cursor-pointer hover:text-[#f44845]">
            <AiOutlineGoogle />
          </a>
          <a className="hover:cursor-pointer hover:text-[#f44845]">
            <FaPinterestP />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
