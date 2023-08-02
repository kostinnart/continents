
import React from "react";
import {questionsAsia} from "../../config";
import {GameAsia} from "./GameAsia";
import {ResultAsia} from "./ResultAsia";

export const Asia = () => {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questionsAsia[step];
    const onClickVariant = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }


    return (

        <div>
            {step !== questionsAsia.length ? (
                <GameAsia step={step} question={question} onClickVariant={onClickVariant}/>) : (
                <ResultAsia correct={correct}/>)}
        </div>




    );
}



