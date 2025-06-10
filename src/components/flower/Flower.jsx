import { useState } from "react";
import Petal from "../Petal/Petal";
import "../flower/Flower.css";

const questions = [
    "¿Le gusto? ¿No le gusto?",
    "¿Es buen momento para hacerlo?",
    "¿Te cuesta decir que no?",
    "¿Es la duda parte de todo camino?",
    "¿Cambiarías algo de tu pasado?"
];

function Flower({ numPetals, onReset }) {
    const [petalStates, setPetalStates] = useState(Array(numPetals).fill(true));
    const [questionIndex, setQuestionIndex] = useState(0);


    const togglePetal = (index) => {
        const newStates = [...petalStates];
        newStates[index] = !newStates[index];
        setPetalStates(newStates);
    };

    // const resetPetals = () => {
    //     setPetalStates(Array(numPetals).fill(true));
    //     onReset(); // opcional, si quieres generar nueva flor
    // };
    const resetPetals = () => {
        setPetalStates(Array(numPetals).fill(true));
        setQuestionIndex((prev) => (prev + 1) % questions.length);
        onReset(); // si estás usando esto para otra cosa
    };

    return (
        <div className="Flower-container">
            <p className="Flower-title">The Blooming Game</p>
            <div className="Flower">
                <div className="Flower-center">
                    <span className="Flower-question">{questions[questionIndex]}</span>
                </div>
                {petalStates.map((isOn, index) => (
                    <Petal
                        key={index}
                        index={index}
                        isOn={isOn}
                        total={numPetals}
                        onClick={() => togglePetal(index)}
                    />
                ))}
            </div>
            <button className="Reset-button" onClick={resetPetals}>
                ¡Florecer!
            </button>
            <div className="Tallo"></div>
            <div className="Cloud cloud1" />
            <div className="Cloud cloud2" />
            <div className="Cloud cloud3" />

        </div>
    );
}

export default Flower;
