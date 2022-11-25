import React from 'react';
import SearchBar from './search';
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([])

const getData = () => {
  fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchQuery)
  .then((res) => res.json())
  .then((data) => {

    setBooks(data.items);
  })
};

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        getData={getData}
      />
      <ul>
        {
          books.map(b => <li>{b.volumeInfo.title}</li>)
        }
      </ul>
    </div>
  );
}


export default App;