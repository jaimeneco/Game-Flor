import "../petal/Petal.css";

function Petal({ index, isOn, total, onClick }) {
    const angle = (360 / total) * index;

    return (
        <div
            className={`petal ${isOn ? "on" : "off"}`}
            style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(0, -120px)`
            }}
            onClick={onClick}
        >
            <span className="petal-label">{isOn ? "Sí" : "No"}</span>
        </div>
    );
}

export default Petal;
