import "./BookShelfChanger.scss";
import PropTypes from "prop-types";

export default function BookShelfChanger(props) {
  const { bookShelves } = props;

  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>
          Move to...
        </option>
        {bookShelves.map((bookShelf, i) => (
          <option key={i} value={bookShelf}>
            {bookShelf}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  bookShelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};
