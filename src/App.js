import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AlbumList from "./AlbumList";
import Newsletter from "./Newsletter";
import SocialMediaLinks from "./SocialMediaLinks";
import Footer from "./Footer";
import SpotifyEmbed from "./SpotifyEmbed";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  const [showRemoveFromCartMessage, setShowRemoveFromCartMessage] =
    useState(false);

  const addToCart = (album) => {
    setCartItems([...cartItems, album]);
    setCartCount(cartCount + 1);
    setShowAddToCartMessage(true);
    setTimeout(() => setShowAddToCartMessage(false), 2000);
  };

  const removeFromCart = (album) => {
    const updatedCartItems = cartItems.filter((item) => item !== album);
    const updatedCartCount = Math.max(cartCount - 1, 0);
    setCartItems(updatedCartItems);
    setCartCount(updatedCartCount);
    setShowRemoveFromCartMessage(true);
    setTimeout(() => setShowRemoveFromCartMessage(false), 2000);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      {showAddToCartMessage && (
        <div className="popup">Successfully added to cart!</div>
      )}
      {showRemoveFromCartMessage && (
        <div className="popup">Item removed from cart!</div>
      )}
      <img src="images/cart.png" alt="Cart" className="small-picture" />
      <AlbumList addToCart={addToCart} removeFromCart={removeFromCart} />
      <Newsletter />
      <SocialMediaLinks />
      <Footer />
      <SpotifyEmbed />
    </div>
  );
}
