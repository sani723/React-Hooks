import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error wuth this listing. <Link to="/">Click here!</Link>{" "}
          to go back to the hom epage or wait 5 seconds
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
