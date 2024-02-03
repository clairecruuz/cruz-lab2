import React from "react";

const SpotifyEmbed = () => (
  <iframe
    title="Spotify Embed"
    style={{
      borderRadius: "12px",
      width: "800px",
      height: "240px",
    }}
    src="https://open.spotify.com/embed/album/4N1fROq2oeyLGAlQ1C1j18?utm_source=generator"
    frameBorder="0"
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
);

export default SpotifyEmbed;
