import { useContext } from "react";
import { Link } from "react-router-dom";

// Components
import BookShelf from "../components/BookShelf";
import BatchShelfChanger from "../components/BatchShelfChanger";

// Context
import AppContext from "../contexts/AppContext";

// Styles
import "./main.scss";

export default function Main(props) {
  const { onShelf, shelves } = useContext(AppContext);
  const [booksOnShelf, , getBooksOnShelf] = onShelf;

  console.log("main.js");
  console.log(booksOnShelf);

  return (
    // List Books
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BatchShelfChanger updateUIOnBatchSelect={getBooksOnShelf} />
      <div className="list-books-content">
        {shelves.map((shelf, i) => (
          <BookShelf
            key={i}
            title={shelf.title}
            books={booksOnShelf.filter((book) => book.shelf === shelf.param)}
            onUpdate={getBooksOnShelf}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
}
