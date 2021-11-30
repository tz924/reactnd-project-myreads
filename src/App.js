import React from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

import shelfContext from "./contexts/shelfContext";

export default function BooksApp() {
  return (
    <shelfContext.Provider
      value={[
        { shelf: "currentlyReading", title: "Currently Reading" },
        { shelf: "wantToRead", title: "Wanted to Read" },
        { shelf: "read", title: "Read" },
      ]}
    >
      <div className="App">
        <Outlet />
      </div>
    </shelfContext.Provider>
  );
}
