import { useState } from 'react';
import AvailableRecipes from './AvailableRecipes';
import SearchBar from '../NavBar/SearchBar';
import './Main.css';

export default function Main(props) {
    return (
        <main>
            <h2>Populära Bakverk</h2>
            <SearchBar onSearch={handleSearch} />
            <div className='card-container'>
                <AvailableRecipes availableRecipes={props.recipes}/>
            </div>

            <div className="scroll-container">
                <a className="scroll-button" href="#top">
                    <span>&uarr;</span>
                </a>       
            </div>
        </main>
    );
}