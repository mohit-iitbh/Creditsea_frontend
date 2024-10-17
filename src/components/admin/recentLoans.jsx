// components/RecentLoans.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaFilter, FaSortAmountUpAlt } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

const RecentLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/recent-loans`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const formattedLoans = response.data.map((loan) => ({
          user: loan.userId.username,
          email: loan.userId.email,
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
    <div className="bg-white p-4 rounded-lg mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Loans</h2>
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
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">User Details</th>
            <th className="px-4 py-2">Customer Name</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {loans.map((loan) => (
            <tr key={loan.id} className="border-t">
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
                <span>{loan.email}</span>
              </td>
              <td className="px-4 py-2">{loan.user}</td>
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
  );
};

export default RecentLoans;
