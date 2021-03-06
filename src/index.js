import React from "react";
import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BooksApp from "./App";
import Main from "./routes/main";
import Search from "./routes/search";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BooksApp />}>
          <Route path="search" element={<Search />} />
          <Route index element={<Main />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
