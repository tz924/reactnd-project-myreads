import { useState } from "react";

import "./search.scss";

// Components
import BookGrid from "../components/BookGrid";
import SearchBooksBar from "../components/SearchBooksBar";

// API
import * as BooksAPI from "../api/BooksAPI";

export default function Search(props) {
  // States
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const showingBooks = query.length > 0 ? books : [];

  const search = (query) => {
    console.log(`search.js: search called, query: ${query}`);
    // Only call api when query in non-empty
    query &&
      BooksAPI.search(query)
        .then((data) => {
          const books = data.error ? [] : data;
          console.log(books);
          setBooks(books);
        })
        .catch((error) => {
          setError(`ERROR: ${error.message}`);
        });
  };

  const handleChange = (event) => {
    const query = event.target.value.trim();
    setQuery(query);
    search(query);
  };

  return (
    // Search Page
    <div className="search-books">
      <SearchBooksBar query={query} handleChange={handleChange} />
      <div className="search-books-results">
        <BookGrid books={showingBooks} handleChanger={() => search(query)} />
        {error}
      </div>
    </div>
  );
}
