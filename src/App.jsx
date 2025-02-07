import React, { useState } from "react";
import "./App.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./assets/puzzle.png";
import Confetti from 'react-confetti';

function App() {
    const [text, setText] = useState("Solve This Puzzle :))");
    const [showButtons, setShowButtons] = useState(false);
    const [resultText, setResultText] = useState("");
    const [contentHidden, setContentHidden] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const set = () => {
        setText("Will You Be My Valentine?");
        setShowButtons(true); 
    };

    const handleYes = () => {
        setContentHidden(true); 
        setResultText("");
        setShowConfetti(true);
    };

    const handleNo = () => {
        setResultText("TRY AGAIN!!!!!!!");
    };

    return (
        <>
            {showConfetti && <Confetti />}
            
            {!contentHidden ? (
                <>
                    <h2 className="tag">{text}</h2>
                    {showButtons && (
                        <div>
                            <button onClick={handleYes}>Yes</button>
                            <button onClick={handleNo}>No</button>
                        </div>
                    )}
                    <h3>{resultText}</h3> {/* Display "Try again" when No is clicked */}
                    <JigsawPuzzle
                        imageSrc={img}
                        rows={3}
                        columns={3}
                        onSolved={set}
                        className="jigsaw-puzzle"
                    />
                </>
            ) : (
                <>
                    <h1>YAYYY!! Vibrazioni Vibrano!</h1>
                </>
            )}
        </>
    );
}

export default App;
