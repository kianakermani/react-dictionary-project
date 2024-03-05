import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";

export default function Search() {
  let [word, setWord] = useState("");
  let [res, setRes] = useState({});

  function handleResponse(r) {
    console.log(r.data[0]);
    setRes(r.data[0]);
  }

  function handle(e) {
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
      </form>
      <Result result={res} />
    </div>
  );
}
