import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSortAmountUpAlt, FaFilter } from "react-icons/fa";
import {FaEllipsisVertical} from 'react-icons/fa6';

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/loans`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const formattedLoans = response.data.map((loan) => ({
          name: loan.userId.username,
          amount: loan.loanAmount.toLocaleString(),
          date: new Date(loan.createdAt).toLocaleDateString(),
          status: loan.loanStatus.toUpperCase(),
        }));
        setLoans(formattedLoans);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        if (error.response.status === 401) {
          localStorage.clear();
          window.location.href = "/login";
        }
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500";
      case "VERIFIED":
        return "bg-green-500";
      case "REJECTED":
        return "bg-red-500";
      case "APPROVED":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Applied Loans</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-gray-300">
            <FaSortAmountUpAlt className="text-gray-600" />
            <span className="hidden md:inline">Sort</span>
          </button>
          <button className="px-4 py-2 rounded-lg flex items-center space-x-1 hover:bg-gray-300">
            <FaFilter className="text-gray-600" />
            <span className="hidden md:inline">Filter</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="px-4 py-2 text-left">Loan Officer</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date Applied</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>

            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="profile"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/40?text=User";
                    }}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <span>{loan.name}</span>
                </td>
                <td className="px-4 py-2">{loan.amount}</td>
                <td className="px-4 py-2">{loan.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${getStatusColor(
                      loan.status
                    )}`}
                  >
                    {loan.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button className="">
                    <FaEllipsisVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanList;
