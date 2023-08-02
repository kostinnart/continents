import {questionsAfrica, questionsAsia, questionsEurope} from "../../config";
import React from "react";


export function GameAfrica({step, question, onClickVariant}) {

    const percentage = Math.round((step / questionsAfrica.length) * 100);



    return (
        <>
            <div className="progress">
                <div style={{width: `${percentage}%`}} className="progress__inner"></div>
            </div>
            <div className="image_div">
                <img className="image_flag" src={question.imgUrl} alt=""/>
            </div>
            <h1>{question.title}</h1>
            <div className="message">{question.message}</div>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li onClick={() => {
                            onClickVariant(index)
                        }} key={text}>{text}</li>
                    ))
                }
            </ul>
        </>
    );
}