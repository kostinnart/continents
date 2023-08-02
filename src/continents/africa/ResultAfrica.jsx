import React from "react";
import {questionsAfrica} from "../../config";

import africa from "../../images/Africa real.svg"

export function ResultAfrica({ correct }) {
    return (
        <div className="result">
            <img src={africa}/>
            <h2>Correct answers : {correct} <br/>FROM : {questionsAfrica.length}</h2>
            <a href="https://kostinnart.github.io/continents/">
                <button>Try again</button>
            </a>
        </div>
    );
}