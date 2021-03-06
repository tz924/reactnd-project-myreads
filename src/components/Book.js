import { useState } from "react";
import PropTypes from "prop-types";
import empty from "../assets/images/empty.png";

// Components
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import BookShelfChanger from "./BookShelfChanger";

// Styles
import "./Book.scss";

export default function Book({
  id,
  title,
  authors,
  cover,
  shelf,
  ratingAverage,
  updateUIOnSelect,
  readOnly = false,
  inline,
}) {
  console.log(`Book.js: ${inline}`);
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(ratingAverage);
  const updateRating = (newRating) => {
    setRating(newRating);
    localStorage.setItem(id, JSON.stringify({ rating: newRating }));
  };

  return (
    <div className="book">
      <div
        className="book-top"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="book-overlay">
          <Checkbox className="Checkbox" value={id} />
        </div>
        <div className="book-cover">
          <img src={cover || empty} alt={title} />
        </div>
        {show && (
          <BookShelfChanger
            book={{ id: id, shelf: shelf }}
            updateUIOnSelect={updateUIOnSelect}
            inline={inline}
          />
        )}
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors?.join(", ") ?? ""}</div>
      {readOnly ? (
        <Rating name="read-only" value={rating} readOnly />
      ) : (
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(_, newRating) => {
            updateRating(newRating);
          }}
        />
      )}
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
