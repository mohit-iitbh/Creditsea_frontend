// App.js
import React from "react";
import AdminSideBar from "../../components/admin/sidebar";
import VerifierDashboardStats from "../../components/verifier/dashboard";
import VerifierHeader from "../../components/verifier/header";
import AppliedLoans from "../../components/verifier/applieLoans";

const VerifierHome = () => {
  return (
    <div className="flex flex-col">
      <VerifierHeader />
      <div className="flex flex-1">
        <AdminSideBar />
        <div className="flex-1 bg-[#dfdfdf] p-6">
            <h1 className="text-left text-custom-green text-2xl font-bold p-2">Dashboard</h1>
          <VerifierDashboardStats />
          <AppliedLoans />
        </div>
      </div>
    </div>
  );
};

export default VerifierHome;
