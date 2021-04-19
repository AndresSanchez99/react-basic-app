import React from 'react';
import './search-bar.styles.css';

const SearchBar = () => {
    return (
        
        <div className="search-bar-container">
            <div className="Searchbar-input">
                <input type="text" placeholder="Search..."/> </div>
            <div>
            <input type ="checkbox"/> Only show products in stock
            </div>
            
        </div>
    );
    
}

export default SearchBar;