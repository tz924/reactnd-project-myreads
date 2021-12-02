import PropTypes from "prop-types";

// Components
import BookGrid from "../components/BookGrid";

// Styles
import "./BookShelf.scss";

export default function BookShelf({ title, books, onUpdate, inline = false }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books} handleChanger={onUpdate} inline={inline} />
        {books.length === 0 && "No books yet"}
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
