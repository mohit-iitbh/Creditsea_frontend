import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [number, setContact] = useState('');
    const [role, setRole] = useState('loan_user'); // Default role is 'user'
    const [activeTab, setActiveTab] = useState('login'); // State to manage active tab

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password, role })
            .then((res) => {
                console.log(res.data);
                const token = res.data.token;
                const role = res.data.role;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                // Redirect user based on role
                if (role === 'admin') {
                    window.location.href = '/admin';
                } else if (role === 'verifier') {
                    window.location.href = '/verifier';
                } else {
                    window.location.href = '/user';
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/signup`, { email, password, username, number, role })
            .then((res) => {                
                const token = res.data.token;
                const role = res.data.role;
                localStorage.setItem('token', token);
                localStorage.setItem('role', role);
                // Redirect user based on role
                if (role === 'admin') {
                    window.location.href = '/admin';
                } else if (role === 'verifier') {
                    window.location.href = '/verifier';
                } else {
                    window.location.href = '/user';
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col w-[40%] p-6 bg-[#dfdfdf] rounded shadow-md">
                <div className="flex justify-around mb-4">
                    <button
                        className={`p-2 ${activeTab === 'login' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`p-2 ${activeTab === 'signup' ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab('signup')}
                    >
                        Signup
                    </button>
                </div>
                {activeTab === 'login' ? (
                    <form onSubmit={handleLoginSubmit} className="flex flex-col">
                <h2 className="text-2xl mb-4">Login</h2>
                <label className="mb-2">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </label>
                <label className="mb-2">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </label>
                <label className="mb-4">
                    Role:
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    >
                        <option value="loan_user">User</option>
                        <option value="admin">Admin</option>
                        <option value="verifier">Verifier</option>
                    </select>
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
                ) : (
                    <form onSubmit={handleSignupSubmit} className="flex flex-col">
                        <h2 className="text-2xl mb-4">Signup</h2>
                        <label className="mb-2">
                            Name:
                            <input
                                type="username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </label>
                        <label className="mb-2">
                            Email:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </label>
                        <label className="mb-2">
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </label>
                        <label className="mb-2">
                            Contact:
                            <input
                                type="number"
                                value={number}
                                onChange={(e) => setContact(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            />
                        </label>
                        <label className="mb-4">
                            Role:
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                            >
                                <option value="loan_user">User</option>
                                <option value="admin">Admin</option>
                                <option value="verifier">Verifier</option>
                            </select>
                        </label>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                            Signup
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default LoginPage;