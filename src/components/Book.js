import "./Book.scss";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";
import empty from "../assets/images/empty.png";

export default function Book(props) {
  const { id, title, authors, cover, shelf, handleChanger } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={cover || empty} alt={title} />
        </div>
        <BookShelfChanger book={{id: id, shelf: shelf}} 
          handleSelect={handleChanger}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors?.join(", ") ?? ""}</div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
};
