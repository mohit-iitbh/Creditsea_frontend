import React, { useState } from 'react';
import axios from 'axios';

const LoanModal = ({ closeModal }) => {
  const [fullName, setFullName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [reason, setReason] = useState('');
  const [employmentAddress, setEmploymentAddress] = useState('');
  const [employmentAddress2, setEmploymentAddress2] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    if (!termsAccepted) {
      alert('Please accept the terms before submitting.');
      return;
    }

    const loanData = {      
      loanAmount,
      loanTenure,
      employmentStatus,
      loanPurpose: reason,
      address1: employmentAddress,
      address2: employmentAddress2
    };

    try {      
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/loan-application`,
        loanData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },        
      });
      console.log('Loan application submitted successfully:', response.data);
      alert('Loan application submitted successfully!');
      
      closeModal();  // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting loan application:', error);
      alert('Failed to submit loan application. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-3/4 p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">APPLY FOR A LOAN</h2>
          <button onClick={closeModal} className="text-gray-500 text-xl">×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600">Full name as it appears on bank account</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">How much do you need?</label>
              <input 
                type="number" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Loan amount" 
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Loan tenure (in months)</label>
              <input 
                type="number" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Loan tenure" 
                value={loanTenure}
                onChange={(e) => setLoanTenure(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Employment status</label>
              <select 
                className="w-full border border-gray-300 rounded-md p-2" 
                value={employmentStatus}
                onChange={(e) => setEmploymentStatus(e.target.value)}
                required
              >
                <option value="" disabled>Select employment status</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Self-Employed">Self-Employed</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600">Reason for loan</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Reason for loan" 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Employment address</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Employment address" 
                value={employmentAddress}
                onChange={(e) => setEmploymentAddress(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Employment address 2</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2" 
                placeholder="Employment address 2" 
                value={employmentAddress2}
                onChange={(e) => setEmploymentAddress2(e.target.value)}                
              />
            </div>
          </div>

          <div className="my-4">
            <label className="inline-flex items-center">
              <input 
                type="checkbox" 
                className="form-checkbox" 
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <span className="ml-2 text-sm text-gray-600">I have read the important information and accept the terms.</span>
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanModal;
