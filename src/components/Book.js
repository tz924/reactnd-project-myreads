import "./Book.scss";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

export default function Book(props) {
  const { title, authors, cover, shelf } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={cover} alt={title} />
        </div>
        <BookShelfChanger shelf={shelf} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
};
