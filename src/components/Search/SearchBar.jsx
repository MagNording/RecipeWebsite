import './SearchBar.css';

function SearchBar() {
    return (
        <div className='search-div'>
            <input type="text" placeholder="Search..." />
            <button type="submit" className='search-button'>Search</button>
        </div>
    );
}

export default SearchBar;