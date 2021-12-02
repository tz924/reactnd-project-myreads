import { useContext, useState } from "react";
import { Button, ToggleButton, ButtonGroup } from "@mui/material";

import PropTypes from "prop-types";

// Context
import AppContext from "../contexts/AppContext";

// API
import * as BooksAPI from "../api/BooksAPI";

// Style
import "./BookShelfChanger.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    black: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});

export default function BookShelfChanger({ book, updateUIOnSelect, inline }) {
  console.log(`BookShelfChanger.js: ${inline}`);

  const { shelves } = useContext(AppContext);
  const onShelfChange = (event) => {
    const newShelf = event.target.value;
    BooksAPI.update({ id: book.id }, newShelf).then(() => {
      // Update UI
      updateUIOnSelect();
    });
  };

  return inline ? (
    <div className="book-shelf-changer-inline">
      <ThemeProvider theme={theme}>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color="black"
        >
          {shelves.map((shelf, i) => (
            <Button
              key={i}
              value={shelf.param}
              onClick={onShelfChange}
              color="black"
            >
              {shelf.title}
              {shelf.param === book.shelf && ` ✓`}
            </Button>
          ))}
        </ButtonGroup>
      </ThemeProvider>
    </div>
  ) : (
    <div className="book-shelf-changer">
      <select defaultValue={book.shelf} onChange={onShelfChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelves.map((shelf, i) => (
          <option key={i} value={shelf.param}>
            {shelf.title}
            {shelf.param === book.shelf && ` ✓`}
          </option>
        ))}
      </select>
    </div>
  );
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  updateUIOnSelect: PropTypes.func.isRequired,
};
