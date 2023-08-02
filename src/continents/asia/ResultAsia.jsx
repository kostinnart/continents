import React from "react";
import {questionsAsia} from "../../config";

import asia from "../../images/asia.svg"

export function ResultAsia({ correct }) {
    return (
        <div className="result">
            <img src={asia}/>
            <h2>Correct answers : {correct} <br/>FROM : {questionsAsia.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}