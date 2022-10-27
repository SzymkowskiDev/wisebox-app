import React from "react";

const Header = ({ user, stock }) => {
  return (
    <header class="d-flex flex-column align-items-start mt-4">
      <h1 class="type-1">
        Dear <span style={{ color: "var(--sky)" }}>{user.name}</span>,
      </h1>
      <p class="type-2 text--ink">
        Welcome to &nbsp;
        <span style={{ color: "var(--sky)" }}>
          {stock.city} {stock.type}
        </span>
        .
      </p>
    </header>
  );
};

export default Header;
