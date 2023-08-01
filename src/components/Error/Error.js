import React from "react";
import "./Error.css";

export default function Error({ error }) {
  return (
    <div className="Error">
      There was and error: oh no
      <br />
      Error message: {error}
      <br />
      Please refresh the page or contact support.
    </div>
  );
}
