import React from 'react';

const LoanSummary = ({ openModal }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md my-6">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-700">₦ 0.0</p>
          <p className="text-sm text-gray-500">DEFICIT</p>
        </div>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Get A Loan
        </button>
      </div>
      <div className="mt-6 flex justify-around border-t pt-4">
        <button className="px-6 py-2 bg-green-700 text-white rounded-lg">Borrow Cash</button>
        <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Transact</button>
        <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Deposit Cash</button>
      </div>
    </div>
  );
};

export default LoanSummary;
