import React, { useState, useContext } from "react";
import { Button, ToggleButton, ButtonGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

// Context
import AppContext from "../contexts/AppContext";

// API
import * as BooksAPI from "../api/BooksAPI";

// Style
import "./BatchShelfChanger.scss";

export default function BatchShelfChanger({ updateUIOnBatchSelect }) {
  const [selected, setSelected] = useState(false);
  const { shelves } = useContext(AppContext);
  const toggleSelections = () => {
    const display = selected ? "none" : "block";

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const MUICheckbox = checkbox.parentElement;
      const bookOverlay = MUICheckbox.parentElement;
      MUICheckbox.style.display = display;
      bookOverlay.style.display = display;
    });

    const buttons = document.querySelector(".batch-select-buttons");
    buttons.style.display = selected ? "none" : "inline-flex";
  };

  return (
    <div className="batch-select">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        className="batch-select-buttons"
      >
        {shelves.map((shelf, index) => (
          <Button
            variant="outlined"
            key={index}
            value={shelf.param}
            onClick={(event) => {
              const newShelf = event.target.value;
              const booksSelected = Array.from(
                document.querySelectorAll('input[type="checkbox"]:checked')
              );
              booksSelected.forEach((book) => {
                const bookId = book.value;
                BooksAPI.update({ id: bookId }, newShelf).then(() => {
                  console.log(`${bookId} moved to ${newShelf}`);

                  // Update UI
                  updateUIOnBatchSelect();
                });
              });

              setSelected(false);
              toggleSelections();
            }}
          >
            {shelf.title}
          </Button>
        ))}
      </ButtonGroup>

      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          toggleSelections();
        }}
      >
        <CheckIcon />
      </ToggleButton>
    </div>
  );
}
