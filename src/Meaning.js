import React from "react";
import "./Search.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <div>
                {definition.example ? (
                  <div>
                    <strong>Example: </strong>
                    <em>{definition.example}</em>
                  </div>
                ) : (
                  <div>
                    <strong>Example: </strong>
                    <em>{"-"}</em>
                  </div>
                )}
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
