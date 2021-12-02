import React, { useState, useContext } from "react";
import { Button, ToggleButton, ButtonGroup } from "@mui/material";
import { SelectAll } from "@mui/icons-material";

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
    setSelected(!selected);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // TODO Reset: uncheck all checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.parentElement.classList.remove("Mui-checked");
    });

    const display = selected ? "none" : "inline-flex";
    checkboxes.forEach((checkbox) => {
      const MUICheckbox = checkbox.parentElement;
      const bookOverlay = MUICheckbox.parentElement;
      MUICheckbox.style.display = display;
      bookOverlay.style.display = display;
    });

    const buttons = document.querySelector(".batch-select-buttons");
    buttons.style.display = selected ? "none" : "inline-flex";
  };

  const handleBatchUpdate = (event) => {
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
  };

  return (
    <div className="batch-select">
      <ButtonGroup
        variant="text"
        aria-label="text button group"
        className="batch-select-buttons"
      >
        {shelves.map((shelf, index) => (
          <Button
            variant="text"
            key={index}
            value={shelf.param}
            onClick={handleBatchUpdate}
            size="large"
            color="secondary"
          >
            {shelf.title}
          </Button>
        ))}
      </ButtonGroup>

      <ToggleButton
        className="batch-select-toggle"
        value="check"
        selected={selected}
        onChange={toggleSelections}
      >
        <SelectAll fontSize="large" />
      </ToggleButton>
    </div>
  );
}
