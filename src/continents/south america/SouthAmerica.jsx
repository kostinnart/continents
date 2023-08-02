
import React from "react";
import {questionsAsia, questionsSouthAmerica} from "../../config";
import {GameSouthAmerica} from "./GameSouthAmerica";
import {ResultSouthAmerica} from "./ResultSouthAmerica";


export const SouthAmerica = () => {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questionsSouthAmerica[step];
    const onClickVariant = (index) => {
        setStep(step + 1)

        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }


    return (

        <div>
            {step !== questionsSouthAmerica.length ? (
                <GameSouthAmerica step={step} question={question} onClickVariant={onClickVariant}/>) : (
                <ResultSouthAmerica correct={correct}/>)}
        </div>




    );
}



