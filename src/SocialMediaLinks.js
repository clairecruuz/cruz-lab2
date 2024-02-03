import React from "react";

const socialMediaLinks = [
  {
    alt: "TikTok",
    src: "images/1tiktok.png",
  },
  {
    alt: "Social Media 2",
    src: "images/2instagram.png",
  },
  {
    alt: "Social Media 3",
    src: "images/3facebook.png",
  },
  {
    alt: "Social Media 4",
    src: "images/4twitter.png",
  },
  {
    alt: "Social Media 5",
    src: "images/5youtube.png",
  },
  {
    alt: "Social Media 6",
    src: "images/6phoning.png",
  },
];

function SocialMediaLinks() {
  return (
    <div className="social-media-links">
      {socialMediaLinks.map((link, index) => (
        <img
          key={index}
          src={link.src}
          alt={link.alt}
          className="social-icon"
        />
      ))}
    </div>
  );
}

export default SocialMediaLinks;
