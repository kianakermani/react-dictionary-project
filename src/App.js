import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <h3>Search your word</h3>
        <Search />
      </div>
      <br />
      <br />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/kianakermani">Kiana Kermani</a> and it is
        <a href="https://github.com/kianakermani/react-dictionary-project">
          open-sourced
        </a>
        .
      </footer>
    </div>
  );
}
