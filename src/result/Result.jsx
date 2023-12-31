import {questionsAsia, questionsEurope} from "../config";
import React from "react";


export function Result({ correct }) {
    return (
        <div className="result">
            <h2>Correct answers : {correct} <br/>FROM : {questionsEurope.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}