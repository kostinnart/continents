import React from "react";
import {questionsAfrica, questionsAsia} from "../../config";
import {GameAfrica} from "./GameAfrica"
import {ResultAfrica} from "./ResultAfrica";


export const Africa = () => {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questionsAfrica[step];
    const onClickVariant = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }


    return (

        <div>
            {step !== questionsAfrica.length ? (
                <GameAfrica step={step} question={question} onClickVariant={onClickVariant}/>) : (
                <ResultAfrica correct={correct}/>)}
        </div>




    );
}
