import React from "react";
import "./App.css";
import Header from "./Header";
import AlbumList from "./AlbumList";
import SpotifyEmbed from "./SpotifyEmbed";
import Newsletter from "./Newsletter";
import SocialMediaLinks from "./SocialMediaLinks";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <img src="images/cart.png" alt="Cart" className="small-picture" />

      <AlbumList />
      <Newsletter />
      <SocialMediaLinks />
      <Footer />
      <SpotifyEmbed />
    </div>
  );
}
