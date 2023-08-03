import React from "react";
import {questionsAsia, questionsSouthAmerica} from "../../config";


export function ResultSouthAmerica({ correct }) {
    return (
        <div className="result">
            <h2>Correct answers : {correct} <br/>FROM : {questionsSouthAmerica.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}