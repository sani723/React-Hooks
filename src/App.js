import React, { useState } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Posts from "./Posts";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Hooks from "./Hooks";
import NavBar from './NavBar';

const App = () => {
  const themeHook = useState("orange");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          {/* <Posts /> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
