import PropTypes from "prop-types";

// Components
import BookGrid from "../components/BookGrid";

// Styles
import "./BookShelf.scss";

export default function BookShelf(props) {
  const { title, books } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books} />
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};
