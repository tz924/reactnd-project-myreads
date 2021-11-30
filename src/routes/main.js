import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import BookShelf from "../components/BookShelf";

// Context
import shelfContext from "../contexts/shelfContext";

// API
import * as BooksAPI from "../api/BooksAPI";

// Styles
import "./main.scss";

export default function Main(props) {
  const shelves = useContext(shelfContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // List Books
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf, i) => (
            <BookShelf
              key={i}
              title={shelf.title}
              books={books.filter((book) => book.shelf === shelf.shelf)}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}
