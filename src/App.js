import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// Style
import "./App.scss";

// Context
import AppContext from "./contexts/AppContext";

// API
import * as BooksAPI from "./api/BooksAPI";

export default function BooksApp() {
  const [booksOnShelf, setBooksOnShelf] = useState([]);
  const [error, setError] = useState("");

  const getBooksOnShelf = () => {
    BooksAPI.getAll()
      .then((books) => {
        setBooksOnShelf(books);
      })
      .catch((error) => {
        setError(`ERROR: ${error.message}`);
      });
  };

  useEffect(() => {
    getBooksOnShelf();
  }, []);

  return (
    <AppContext.Provider
      value={{
        onShelf: [booksOnShelf, setBooksOnShelf, getBooksOnShelf],
        shelves: [
          { param: "currentlyReading", title: "Currently Reading" },
          { param: "wantToRead", title: "Wanted to Read" },
          { param: "read", title: "Read" },
        ],
      }}
    >
      <div className="App">
        {error}
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}
