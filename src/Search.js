import React, { useState } from "react";
export default function Search() {
  let [word, setWord] = useState("");
  function handle(e) {
    e.preventDefault();
    alert(`Searching for ${word} definition`);
  }
  function update(e) {
    setWord(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handle}>
        <input type="Search" autoFocus="true" onChange={update} />
      </form>
    </div>
  );
}
