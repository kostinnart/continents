import React from "react";
import {questionsAfrica} from "../../config";


export function ResultAfrica({ correct }) {
    return (
        <div className="result">
            <h2>Correct answers : {correct} <br/>FROM : {questionsAfrica.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}