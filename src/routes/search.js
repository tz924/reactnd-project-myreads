import { useState, useContext } from "react";

import "./search.scss";

// Context
import AppContext from "../contexts/AppContext";

// Components
import BookGrid from "../components/BookGrid";
import SearchBooksBar from "../components/SearchBooksBar";
import BatchShelfChanger from "../components/BatchShelfChanger";

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

  const updateSearchUI = () => {
    // Update results
    search(query);
    // Sync books on shelf
    getBooksOnShelf();
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
        {!(showingBooks.length === 0) && (
          <BatchShelfChanger updateUIOnBatchSelect={updateSearchUI} />
        )}
        <BookGrid
          books={showingBooks}
          handleChanger={updateSearchUI}
          readOnly
        />
        {error}
      </div>
    </div>
  );
}
