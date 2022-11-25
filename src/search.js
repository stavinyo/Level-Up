import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery, getData}) => (<>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Books</span>
        </label>
        <input
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="search..."
            name="s"
        />
    <button type="submit" onClick={getData} >Search</button>
</>
);
export default SearchBar;

