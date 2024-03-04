import React, { useState } from "react";
import axios from "axios";

function handleResponse(r) {
  console.log(r.data[0]);
}
export default function Search() {
  let [word, setWord] = useState("");
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
    </div>
  );
}
