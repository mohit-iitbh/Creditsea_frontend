// App.js
import React from "react";
import AdminSideBar from "../../components/admin/sidebar";
import AdminDashboardStats from "../../components/admin/dashboard";
import AdminHeader from "../../components/admin/header";
import RecentLoans from "../../components/admin/recentLoans";

const AdminHome = () => {
  return (
    <div className="flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSideBar />
        <div className="flex-1 bg-[#dfdfdf] p-6">
            <h1 className="text-left text-custom-green text-2xl font-bold p-2">Dashboard</h1>
          <AdminDashboardStats />
          <RecentLoans />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
