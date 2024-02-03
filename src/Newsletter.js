import React from "react";

function Newsletter() {
  return (
    <div className="newsletter">
      <p className="header-text">SIGN UP FOR UPDATES FROM NEWJEANS</p>
      <form>
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="ENTER YOUR EMAIL"
          className="email-input"
        />
        <br />
        <br />
        <button type="submit" className="sign-up-button">
          SIGN UP
        </button>
      </form>
      <p className="footer-text">
        Emails will be sent by or on behalf of UMG Recordings Services, Inc.
        2220 Colorado Avenue, Santa Monica , <br></br>CA 90404 (310) 865-4000.
        You may withdraw your consent at any time. See Privacy Policy at{" "}
        <br></br>
        <a
          href="http://privacy.umusic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://privacy.umusic.com
        </a>
        .
      </p>
    </div>
  );
}

export default Newsletter;
