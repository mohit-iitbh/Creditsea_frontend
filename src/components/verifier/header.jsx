// components/Header.js
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaBell, FaComments, FaUser, FaCaretDown } from "react-icons/fa"; 

const VerifierHeader = () => {
  return (
    <div className="text-xl font-bold shadow-md border-b-4 border-white text-custom-green">
      <header className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold p-4">CREDIT APP</h1>
          <div className="p-4">
            <FaBars className="text-xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-4"></div>
          <div className="p-4">
            <FaBell className="text-xl" />
          </div>
          <div className="p-4">
            <FaComments className="text-xl" />
          </div>
          <div className="p-4">
            <FaUser className="rounded-full bg-green-950" />
          </div>
          <div className="p-4 relative">
            <button className="text-xl focus:outline-none flex items-center">
              <span>Verifier</span><FaCaretDown />
            </button>
            {/* <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </a>
            </div> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default VerifierHeader;
