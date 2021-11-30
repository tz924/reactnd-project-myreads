import "./Book.scss";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

export default function Book(props) {
  const { title, authors, style, bookShelves } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={style}></div>
        <BookShelfChanger bookShelves={bookShelves} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  bookShelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};
