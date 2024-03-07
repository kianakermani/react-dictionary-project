import React from "react";
import "./Search.css";
export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      <div className="text">{props.phonetic.text}</div>
    </div>
  );
}
