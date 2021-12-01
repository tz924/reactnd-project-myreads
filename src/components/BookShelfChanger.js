import { useContext } from "react";
import "./BookShelfChanger.scss";
import PropTypes from "prop-types";
import shelfContext from "../contexts/shelfContext";

export default function BookShelfChanger(props) {
  const { book } = props;
  const shelves = useContext(shelfContext);
  console.log(book);

  return (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map((shelf, i) => (
          <option key={i} value={shelf.param}>
            {shelf.title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
};
