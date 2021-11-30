import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchBooksBar.scss";
import * as BooksAPI from "../api/BooksAPI";

// Contexts
// import shelfContext from "../contexts/shelfContext";

export default function SearchBooksBar(props) {
  const { query, handleChange, handleSearch } = props;

  useEffect(() => {
    BooksAPI.search(query)
      .then((books) => {
        if (books) handleSearch(books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query, handleSearch]);

  return (
    <div className="search-books-bar">
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
        
        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
