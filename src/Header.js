import React from "react";

function Header({ cartCount }) {
  return (
    <header>
      <img src="images/logo.png" alt="Header" />
      <span className="cart-count">{cartCount}</span>
    </header>
  );
}

export default Header;
