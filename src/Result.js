import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
export default function Result(props) {
  if (props.result) {
    return (
      <div>
        <h2>{props.result.word}</h2>
        {props.result.phonetics?.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.result.meanings?.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
