import { useState, useEffect } from "react";
import "../petal/Petal.css";

function Petal({ index, isOn, total, onClick }) {
    const [falling, setFalling] = useState(false);
    const [hidden, setHidden] = useState(false);

    // Si el padre resetea el pétalo, volvemos a mostrarlo
    useEffect(() => {
        if (isOn && hidden) {
            setFalling(false);
            setHidden(false);
        }
    }, [isOn, hidden]);

    const angle = (360 / total) * index;

    const handleClick = () => {
        if (!falling && !hidden) {
            setFalling(true);
            if (onClick) onClick();
        }
    };

    return (
        <div
            className={`Petal ${isOn ? "on" : "off"} ${falling ? "falling" : ""} ${hidden ? "invisible" : ""}`}
            style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -120px)`,
                "--angle": `${angle}deg`
            }}
            onClick={handleClick}
            onAnimationEnd={() => setHidden(true)}
        >
            {/* <span className="Petal-label">{index % 2 === 0 ? "Sí" : "No"}</span> */}
        </div>
    );
}

export default Petal;


