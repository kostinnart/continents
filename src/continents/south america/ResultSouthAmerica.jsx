import React from "react";
import {questionsAsia, questionsSouthAmerica} from "../../config";

import southAmerica from "../../images/South America .svg"

export function ResultSouthAmerica({ correct }) {
    return (
        <div className="result">
            <img src={southAmerica}/>
            <h2>Correct answers : {correct} <br/>FROM : {questionsSouthAmerica.length}</h2>
            <a href="https://kostinn-x.github.io/countries/">
                <button>Try again</button>
            </a>
        </div>
    );
}