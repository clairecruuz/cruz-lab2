import React from "react";

function Footer() {
  return (
    <footer className="custom-footer">
      <p>&copy; 2024 NewJeans Official Store. All Rights Reserved.</p>
      <nav>
        Help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Do Not Sell My Personal
        Information
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Cookie Choices
      </nav>
      <p className="screen-reader-info">
        IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS
        WEBSITE, PLEASE CALL 866-682-4413 FOR ASSISTANCE.
      </p>
    </footer>
  );
}

export default Footer;
