import React, { useState, lazy, Suspense } from "react";
import { Router } from "@reach/router";
import Posts from "./Posts";
import ThemeContext from "./ThemeContext";
import Hooks from "./Hooks";
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("orange");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
          {/* <Posts /> */}
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
// render(<App />, document.getElementById("root"));
