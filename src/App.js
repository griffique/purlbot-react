import "./App.css";

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
      <ul id="navigation-menu">
        <li>
          <button>How to Use </button>
        </li>
        <li>
          <button>Pattern Generator</button>
        </li>
        <li>
          <button>About PurlBot</button>
        </li>
      </ul>

      <div id="display-area">
        <div className="card pattern-generator">
          <img
            src="https://drive.google.com/uc?id=1aZ99clyDOzLS5mr09IDSKcggLH1O7kwT"
            className="card-img-top pattern-generator-image"
            alt="knitting supplies"
          />
          <div className="card-body">
            <br />
            <h5 className="card-title" id="pattern-generator">
              Pattern Generator
            </h5>

            <form id="scarf-form" autocomplete="off">
              <br />
              <h5>Optional: enter your name.</h5>
              <input
                className="form-control"
                type="text"
                placeholder="Type your name here..."
                id="name"
              />
              <br />
              <h5>What do you want to knit?</h5>
              <div className="form-group">
                <select className="form-control" id="project-type">
                  <option>Scarf</option>
                  <option>Coming Soon: Hat</option>
                  <option>Coming Soon: Mittens</option>
                </select>
              </div>
              <br />
              <h5>
                On your gauge swatch, how many stitches do you count
                <strong> horizontally </strong> per inch?
              </h5>
              <input
                className="form-control"
                type="text"
                placeholder="Type a number here..."
                id="gauge"
              />
              <br />
              <input type="Submit" id="submit" />
            </form>
          </div>
        </div>
      </div>
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
