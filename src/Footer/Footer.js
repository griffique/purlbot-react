import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer id="coded-by" className="no-print">
      <a
        href="https://github.com/griffique/griffin-she-codes-plus"
        target="_blank" rel="noreferrer"
      >
        Open Source Code
      </a>{" "}
      by {""}
      <a
        href="https://www.linkedin.com/in/quinn-griffin-9955711b8/"
        target="_blank" rel="noreferrer"
      >
        Quinn Griffin
      </a>{" "}
      <br />
      <span style={{ fontStyle: "italic", fontSize: "16px" }}>
        {" "}
        Have you made something with PurlBot?{" "}
        <a href="mailto:purlbot@protonmail.com">Contact me</a> with photos of
        your project or suggestions!
      </span>
    </footer>
  );
}
