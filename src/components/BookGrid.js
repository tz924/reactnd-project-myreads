import Book from "../components/Book";
import PropTypes from "prop-types";
import "./BookGrid.scss";

export default function BookGrid({ books, handleChanger, readOnly }) {
  const getRating = (id) => {
    const book = localStorage.getItem(id);
    if (book) return JSON.parse(book).rating;
    return null;
  };

  return (
    <ol className="books-grid">
      {books.map((book, i) => (
        <li key={i}>
          <Book
            id={book.id}
            title={book.title}
            authors={book.authors || []}
            cover={book.imageLinks?.thumbnail ?? ""}
            shelf={book.shelf || "none"}
            ratingAverage={getRating(book.id) || book.averageRating}
            updateUIOnSelect={handleChanger}
            readOnly={readOnly}
          />
        </li>
      ))}
    </ol>
  );
}

BookGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChanger: PropTypes.func.isRequired,
};
