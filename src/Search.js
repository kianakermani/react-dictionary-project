import React, { useState } from "react";
import Result from "./Result";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [res, setRes] = useState({});
  let [loaded, setLoaded] = useState(false);

  function handleResponse(r) {
    setRes(r.data[0]);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handle(e) {
    e.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <section>
          <form onSubmit={handle} className="search">
            <input
              type="Search"
              className="inp1"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="For example sunset"
            />
            <input type="submit" className="bttn" value={"Search"} />
          </form>
        </section>
        <Result result={res} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
