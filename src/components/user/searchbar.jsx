import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="flex justify-center items-center py-2">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                className="flex-1 p-2 mr-2 border border-gray-300 rounded"
            />
            <button className="p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
