import Book from "../components/Book";
import "./BookShelf.scss";
import PropTypes from "prop-types";

export default function BookShelf(props) {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book, i) => (
            <li key={i}>
              <Book
                title={book.title}
                authors={book.authors?.join(",") ?? ""}
                cover={book.imageLinks.thumbnail}
                shelf={title}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
