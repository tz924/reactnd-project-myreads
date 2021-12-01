import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import BookShelf from "../components/BookShelf";

// Context
import AppContext from "../contexts/AppContext";

// Styles
import "./main.scss";

export default function Main(props) {
  const { onShelf, shelves } = useContext(AppContext);
  const [booksOnShelf, , getBooksOnShelf] = onShelf;

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
              books={booksOnShelf.filter((book) => book.shelf === shelf.param)}
              onUpdate={getBooksOnShelf}
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
