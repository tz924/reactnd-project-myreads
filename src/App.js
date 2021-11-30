import React from "react";
import { Outlet } from "react-router-dom";

import "./App.scss";

export default function BooksApp() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
