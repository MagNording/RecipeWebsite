import { useState } from 'react';
import AvailableRecipes from './AvailableRecipes';
import SearchBar from '../Search/SearchBar';
import './Main.css';

export default function Main() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <main>
            <h2>Populära Bakverk</h2>
            <SearchBar onSearch={handleSearch} />
            <div className='card-container'>
                <AvailableRecipes searchTerm={searchTerm} />
            </div>

            <div className="scroll-container">
                <a className="scroll-button" href="#top">
                    <span>&uarr;</span>
                </a>       
            </div>
        </main>
    );
}