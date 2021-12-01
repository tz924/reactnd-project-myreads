import React from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

import shelfContext from "./contexts/shelfContext";

export default function BooksApp() {
  return (
    <shelfContext.Provider
      value={[
        { param: "currentlyReading", title: "Currently Reading" },
        { param: "wantToRead", title: "Wanted to Read" },
        { param: "read", title: "Read" },
      ]}
    >
      <div className="App">
        <Outlet />
      </div>
    </shelfContext.Provider>
  );
}
