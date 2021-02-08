import "./App.css";
import PatternGeneratorForm from "./PatternGeneratorForm";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">
        🧶<span id="purl-title">Purl</span>
        <span id="bot-title">Bot</span>
      </h1>
      <h2 className="subtitle">
        Generate basic knitting patterns customized to you.
      </h2>
      <div className="navigation-bar">
        <button>How to Use </button>

        <button>Pattern Generator</button>

        <button>About PurlBot</button>
      </div>
      <PatternGeneratorForm />
      <footer id="coded-by">
        <a
          href="https://github.com/griffique/griffin-she-codes-plus"
          target="_blank"
        >
          Open Source Code
        </a>{" "}
        by {""}
        <a
          href="https://www.linkedin.com/in/quinn-griffin-9955711b8/"
          target="_blank"
        >
          Quinn Griffin
        </a>
        🐱‍🚀 <br />
        <span id="updates"> Last Updated Feb 5, 2021 </span>
        <br />
        Have you made something with PurlBot?
        <a href="mailto:purlbot@protonmail.com"> Contact me </a> with photos of
        your project or suggestions!
      </footer>
    </div>
  );
}
