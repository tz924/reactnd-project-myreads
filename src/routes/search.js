import { useState, useContext } from "react";

import "./search.scss";

// Context
import AppContext from "../contexts/AppContext";

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

  const [booksOnShelf, , getBooksOnShelf] = useContext(AppContext).onShelf;

  const search = (query) => {
    // Only call api when query in non-empty
    query &&
      BooksAPI.search(query)
        .then((data) => {
          const books = data.error ? [] : data;
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

  const showingBooks =
    query.length > 0
      ? books.map((book) => {
          // If book on shelf, sync shelf status
          booksOnShelf.forEach((bookOnShelf) => {
            if (bookOnShelf.id === book.id) book.shelf = bookOnShelf.shelf;
          });

          return book;
        })
      : [];

  return (
    // Search Page
    <div className="search-books">
      <SearchBooksBar query={query} handleChange={handleChange} />
      <div className="search-books-results">
        <BookGrid
          books={showingBooks}
          handleChanger={() => {
            // Update results
            search(query);
            // Sync books on shelf
            getBooksOnShelf();
          }}
          readOnly
        />
        {error}
      </div>
    </div>
  );
}
