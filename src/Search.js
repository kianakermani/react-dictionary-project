import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Search() {
  let [word, setWord] = useState("");
  let [res, setRes] = useState({});

  function handleResponse(r) {
    setRes(r.data[0]);
  }

  function handle(e) {
    alert("Please wait...");
    e.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function update(e) {
    setWord(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handle}>
        <input type="Search" autoFocus={true} onChange={update} />
        <input type="submit" value={"Search"} />
      </form>
      <Result result={res} />
    </div>
  );
}
