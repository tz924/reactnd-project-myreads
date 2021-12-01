import { useState } from "react";
import PropTypes from "prop-types";
import empty from "../assets/images/empty.png";

// Components
import Rating from "@mui/material/Rating";
import BookShelfChanger from "./BookShelfChanger";

// Styles
import "./Book.scss";

export default function Book(props) {
  const { id, title, authors, cover, shelf, updateUIOnSelect } = props;

  const [rating, setRating] = useState(0);

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover">
          <img src={cover || empty} alt={title} />
        </div>
        <BookShelfChanger
          book={{ id: id, shelf: shelf }}
          updateUIOnSelect={updateUIOnSelect}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors?.join(", ") ?? ""}</div>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newRating) => {
          setRating(newRating);
        }}
      />
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  cover: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  updateUIOnSelect: PropTypes.func.isRequired,
};
