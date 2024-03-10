import React, { useState, useEffect } from "react";
import "../App.css";
import Buttons from "./Buttons";
import WinningModal from "./WinningModal";
import Numbers from "./Numbers";
import Heading from "./Heading";

const Main = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]); // Correct order
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (spinning) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === numbers.length - 1 ? 0 : prevIndex + 1
        );
      }, 200);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [spinning, numbers.length]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const spin = () => {
    setSpinning(true);
    // Shuffle the numbers
    const shuffledNumbers = shuffleArray([...numbers]);
    setTimeout(() => {
      setNumbers(shuffledNumbers);
      setCurrentIndex(0);
      setSpinning(false);
      checkResult(shuffledNumbers);
    }, 1000); // Simulating spinning time
  };

  const checkResult = (shuffledNumbers) => {
    if (
      JSON.stringify(shuffledNumbers) === JSON.stringify([1, 2, 3, 4, 5, 6])
    ) {
      setResult("1st PRIZE");
    }
  };

  return (
    <div className="app main-section">
      <Heading img={"/images/Congrat 1.png"} />
      <div className="lottery-container">
        {numbers.map((number, index) => (
          <Numbers index={index} currentIndex={currentIndex} number={number} />
        ))}
      </div>
      <Buttons onClick={spin} disabled={spinning} img={"/images/btn-1.png"} />
      {result ? <WinningModal label={"1st PRIZE"} /> : null}
    </div>
  );
};

export default Main;
