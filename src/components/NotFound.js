import React from "react";

export default function NotFound({ type }) {
  return (
    <section>
      <header className="action-header">
        <h1>No {type} found at this address.</h1>
      </header>
    </section>
  );
}
