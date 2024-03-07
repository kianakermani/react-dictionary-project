import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <h3>Search your word :</h3>
        <Search defaultKeyword="Sunset" />
      </div>
      <br />
      <br />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/kianakermani"
          target="_blank"
          rel="noreferrer"
        >
          Kiana Kermani
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/kianakermani/react-dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}
