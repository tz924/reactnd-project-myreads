import { useContext } from "react";
import "./BookShelfChanger.scss";
import PropTypes from "prop-types";
import shelfContext from "../contexts/shelfContext";

export default function BookShelfChanger(props) {
  const { shelf } = props;
  const shelves = useContext(shelfContext);
  const bookShelves = shelves.map((shelf) => shelf.title);

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        {bookShelves.map((bookShelf, i) => (
          <option key={i} value={bookShelf} selected={bookShelf === shelf}>
            {bookShelf}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
};
