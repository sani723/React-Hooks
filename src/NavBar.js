import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      css={css`
        background-color: #333;
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me!</Link>
      <span role="img" aria-label="logo" css={css`font-size: 80px;`}>
        💐
      </span>
    </header>
  );
};

export default NavBar;
