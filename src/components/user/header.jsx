import React from 'react';
import { FaBell, FaComments, FaUser, FaCaretDown } from 'react-icons/fa';
import logout from '../../utils/logout';
const Header = () => {

  const showOptions = () => {
    const options = document.getElementById('options');
    options.classList.toggle('hidden');
  }
  return (
    <header className="bg-white shadow text-custom-green">
      <div className="mx-2 flex justify-between items-center">
        <h1 className="text-lg font-bold ">CREDIT APP</h1>
        <nav className="flex items-center space-x-6">
          <a href="/" className="hover:text-green-700 text-xl font-semibold">Home</a>
          <a href="/" className="hover:text-green-700 text-xl font-semibold">Payments</a>
          <a href="/" className="hover:text-green-700 text-xl font-semibold">Budget</a>
          <a href="/" className="hover:text-green-700 text-xl font-semibold">Card</a>          
        </nav>
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
            <button onClick={showOptions} className="text-xl focus:outline-none flex items-center">
              <span>User</span><FaCaretDown />
            </button>
            <div id='options' className="absolute hidden right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              {/* <a
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
              </a> */}
              <a onClick={logout}
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
