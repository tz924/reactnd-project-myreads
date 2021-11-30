import React from "react";
import { Outlet } from "react-router-dom";

// import * as BooksAPI from './api/BooksAPI'
import "./App.scss";

export default function BooksApp() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
