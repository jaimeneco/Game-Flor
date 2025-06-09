import { useState } from "react";
import Petal from "../Petal/Petal";
import "../flower/Flower.css";

function Flower({ numPetals, onReset }) {
    const [petalStates, setPetalStates] = useState(Array(numPetals).fill(true));

    const togglePetal = (index) => {
        const newStates = [...petalStates];
        newStates[index] = !newStates[index];
        setPetalStates(newStates);
    };

    const resetPetals = () => {
        setPetalStates(Array(numPetals).fill(true));
        onReset(); // opcional, si quieres generar nueva flor
    };

    return (
        <div className="flower-container">
            <div className="flower">
                <div className="flower-center" />
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
            <button className="reset-button" onClick={resetPetals}>
                Reset
            </button>
            <div className="tallo"></div>
            
        </div>
    );
}

export default Flower;
