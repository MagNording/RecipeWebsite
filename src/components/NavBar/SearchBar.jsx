import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className='search-div'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit} className='search-button'>Search</button>
        </div>
    );
}

export default SearchBar;