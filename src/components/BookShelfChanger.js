import { useContext } from "react";
import "./BookShelfChanger.scss";
import PropTypes from "prop-types";
import shelfContext from "../contexts/shelfContext";

// API
import * as BooksAPI from "../api/BooksAPI";

export default function BookShelfChanger(props) {
  const { book, handleSelect } = props;
  const shelves = useContext(shelfContext);

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={book.shelf}
        onChange={(event) => {
          const newShelf = event.target.value;
          BooksAPI.update({ id: book.id }, newShelf).then(() => {
            // Update books
            handleSelect();
          });
        }}
      >
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
