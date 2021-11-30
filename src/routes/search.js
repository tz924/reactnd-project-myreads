import { useState } from "react";

import "./search.scss";

// Components
import Book from "../components/Book";
import SearchBooksBar from "../components/SearchBooksBar";

export default function Search(props) {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  return (
    // Search Page
    <div className="search-books">
      <SearchBooksBar
        query={query}
        handleChange={(event) => {
          setQuery(event.target.value);
        }}
        handleSearch={(books) => {
          setBooks(books);
        }}
      />
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book, i) => (
              <li key={i}>
                {/* TODO read for now */}
                <Book
                  title={book.title}
                  authors={book.authors.join(",")}
                  cover={book.imageLinks.thumbnail}
                  shelf={`read`}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}
