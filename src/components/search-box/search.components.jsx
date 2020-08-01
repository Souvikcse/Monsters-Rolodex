import React from 'react';
import './search.styles.css';

const Search = ({ placeholder, handleChange }) => {
    return (
        <div className="search">
            <input 
            className="search-bar"
            type='search'
            placeholder={ placeholder }
            onChange = { handleChange }>
            </input>
        </div>
    );
}
export default Search;