import {questionsAsia, questionsEurope} from "../config";
import React from "react";

import europe from "../images/Europe.svg"

export function Result({ correct }) {
    return (
        <div className="result">
            <img src={europe}/>
            <h2>Correct answers : {correct} <br/>FROM : {questionsEurope.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}