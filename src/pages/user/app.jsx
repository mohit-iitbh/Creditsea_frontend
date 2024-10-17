import React, { useState } from 'react';
import Header from '../../components/user/header';
import LoanSummary from '../../components/user/loanSummary';
import LoanList from '../../components/user/loanList';
import LoanModal from '../../components/user/loanModal';
import SearchBar from '../../components/user/searchbar';

const UserHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#dfdfdf]">
      <Header />
      <div className="container mx-auto p-4">
        <LoanSummary openModal={openModal} />
        <SearchBar />
        <LoanList />
        {isModalOpen && <LoanModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default UserHome;
