import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        // If the search term is empty
        if (newSearchTerm === '') {
            props.onSearch('');
        }
    };

    const handleSearchClick = (e) => {
        e.preventDefault();
        props.onSearch(searchTerm);
    };

    return (
        <div className='search-div'>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearchClick} className='search-button'>Search</button>
        </div>
    );
}

export default SearchBar;