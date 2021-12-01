import React, { useState, useContext } from "react";
import { Button, ToggleButton } from "@mui/material";
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

  return (
    <div className="batch-select">
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
            event.target.display = "none";
          }}
        >
          {shelf.title}
        </Button>
      ))}

      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
          setSelected(!selected);
          const checkboxes = document.querySelectorAll(
            'input[type="checkbox"]'
          );
          checkboxes.forEach((checkbox) => {
            checkbox.parentElement.style.display = selected ? "block" : "none";
          });
        }}
      >
        Select
      </ToggleButton>
    </div>
  );
}
