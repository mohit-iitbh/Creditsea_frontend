// components/DashboardStats.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { FiUserMinus } from "react-icons/fi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineSavings } from "react-icons/md";

const VerifierDashboardStats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/verifier/stats`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const data = response.data[0] ?? {};
        setStats([
          { title: "Loans", value: data.loans, icon: <FaMoneyBillAlt /> },
          { title: "Borrowers", value: data.borrowers, icon: <FiUserMinus /> },
          {
            title: "Cash Disbursed",
            value: data.cashDisbursed,
            icon: <FaMoneyBills />,
          },
          { title: "Cash Received", value: data.cashReceived, icon: "₦" },
          { title: "Savings", value: data.savings, icon: <MdOutlineSavings /> },
          {
            title: "Repaid Loans",
            value: data.repaidLoans,
            icon: <FaMoneyBillAlt />,
          },
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        if (error.response.status === 401) {
          localStorage.clear();
          window.location.href = "/login";
        }
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-green-600 text-white p-6 rounded-lg flex items-center justify-between"
        >
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div>{stat.title}</div>
          </div>
          <div className="text-4xl">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default VerifierDashboardStats;
