import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleStepChange = (newStep) => setStep(newStep);

  const handleCountChange = (increment) => setCount((c) => c + increment);

  return (
    <div className="counter-container">
      <div className="step-container">
        <button onClick={() => handleStepChange(step - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => handleStepChange(step + 1)}>+</button>
      </div>

      <div className="count-container">
        <button onClick={() => handleCountChange(-step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => handleCountChange(step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
