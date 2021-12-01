import { useState } from "react";

import "./search.scss";

// Components
import BookGrid from "../components/BookGrid";
import SearchBooksBar from "../components/SearchBooksBar";

// API
import * as BooksAPI from "../api/BooksAPI";

export default function Search(props) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const showingBooks = query.length > 0 ? books : [];

  return (
    // Search Page
    <div className="search-books">
      <SearchBooksBar
        query={query}
        handleChange={(event) => {
          const query = event.target.value.trim();
          setQuery(query);

          // Only call api when query in non-empty
          query &&
            BooksAPI.search(query)
              .then((data) => {
                const books = data.error ? [] : data;
                setBooks(books);
              })
              .catch((error) => {
                console.log(`ERROR: ${error.message}`);
              });
        }}
      />
      <div className="search-books-results">
        <BookGrid books={showingBooks} />
      </div>
    </div>
  );
}
