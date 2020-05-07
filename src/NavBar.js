import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import Colors from "./Colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    <header
      css={css`
        background-color: ${Colors.secondary};
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 80px;
          display: inline-block;
          animation: ${spin} 5s linear infinite; 
          &:hover {
              text-decoration: underline;
          }
        `}
      >
        💐
      </span>
    </header>
  );
};

export default NavBar;
