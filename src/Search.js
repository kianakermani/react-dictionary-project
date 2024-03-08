import React, { useState } from "react";
import Result from "./Result";
import Photos from "./Photos";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [res, setRes] = useState({});
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(r) {
    setRes(r.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);

    let pKey = " d7YcPdCOkhxmWD3BPX1GDgHNPal9cqk9TwBUQTi29G2VOwDEc0K8CBW7";
    let pUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pKey}` };
    axios.get(pUrl, { headers: headers }).then(handlePexelResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
