import Book from "../components/Book";
import PropTypes from "prop-types";

export default function BookGrid(props) {
  const { books } = props;

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
          />
        </li>
      ))}
    </ol>
  );
}

BookGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
