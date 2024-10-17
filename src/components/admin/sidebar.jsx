// components/Sidebar.js
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import logout from '../../utils/logout';

const AdminSideBar = () => {
  return (
    <div className="bg-green-900 text-white h-full w-1/5">        
      <div className="p-4 flex border shadow-lg border-[#243629] bg-[#243629] items-center">
        <div className="w-12  rounded-full bg-gray-400"></div>
        <FaUserCircle className="text-4xl rounded-full text-lime-500" />
        <span className="ml-4">John Doe</span>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="py-2 border border-black hover:bg-green-700">Dashboard</li>
          <li className="py-2 border border-black hover:bg-green-700">Borrowers</li>
          <li className="py-2 border border-black hover:bg-green-700">Loans</li>
          <li className="py-2 border border-black hover:bg-green-700">Repayments</li>
          <li className="py-2 border border-black hover:bg-green-700">Loan Parameters</li>
          <li className="py-2 border border-black hover:bg-green-700">Accounting</li>
          <li className="py-2 border border-black hover:bg-green-700">Reports</li>
          <li className="py-2 border border-black hover:bg-green-700">Collateral</li>
          <li className="py-2 border border-black hover:bg-green-700">Access Configuration</li>
          <li className="py-2 border border-black hover:bg-green-700">Savings</li>
          <li className="py-2 border border-black hover:bg-green-700">Other Incomes</li>
          <li className="py-2 border border-black hover:bg-green-700">Payroll</li>
          <li className="py-2 border border-black hover:bg-green-700">Expenses</li>
          <li className="py-2 border border-black hover:bg-green-700">E-Signature</li>
          <li className="py-2 border border-black hover:bg-green-700">Investor Accounts</li>
          <li className="py-2 border border-black hover:bg-green-700">Calendar</li>
          <li className="py-2 border border-black hover:bg-green-700">Settings</li>
          <li className="py-2 border border-black hover:bg-green-700" onClick={logout}>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSideBar;
