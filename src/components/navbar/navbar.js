import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUser,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-3 flex justify-between items-center shadow-xl">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-black me-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <div className="relative w-full md:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <button className="p-1 focus:outline-none text-gray-900">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-10 rounded bg-gray-700 text-white focus:outline focus:bg-white focus:text-gray-900 placeholder-transparent md:placeholder-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-gray-500">
          <FaEnvelope className="w-6 h-6" />
          <div className="absolute rounded-lg w-6 h-6 text-white bg-green-700 flex -top-0 justify-center items-center">
            5
          </div>
        </div>
        <div className="text-gray-500">
          <FaBell className="w-6 h-6" />
          <div className="absolute rounded-lg w-6 h-6 text-white bg-blue-700 flex -top-0 justify-center items-center">
            3
          </div>
        </div>
        <div className="relative">
          <button
            className="focus:outline-none flex"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="/asset/femalepic2.jpeg"
              className="w-4 sm:w-12 md:w-16 lg:w-12 xl:w-18 rounded-full"
            />
            <span className="text-blue-600 font-semibold ml-3 text-center">
              John A. Otene
            </span>
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white rounded-lg shadow w-48 top-full right-0 z-50">
              <h2 className="font-bold text-blue-800 ml-6 text-center text-2xl">
                John A. Otene
              </h2>
              <h4 className="font-bold text-blue-800 ml-2 text-xs text-center">
                FULL STACK DEVELOPER
              </h4>
              <hr className="border-t-1 border-gray-900 font-bold" />
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    <FaUser className="inline-block w-4 h-4 mr-2" />
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    <FaCog className="inline-block w-4 h-4 mr-2" />
                    Account Setting
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    <FaQuestionCircle className="inline-block w-4 h-4 mr-2" />
                    Need Help?
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    <FaSignOutAlt className="inline-block w-4 h-4 mr-2" />
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
