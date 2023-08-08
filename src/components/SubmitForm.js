import { useRef } from "react";

export default function SubmitForm({ onCalcSubmitHandler, onCancel }) {
  const currSavingsRef = useRef("");
  const yearlyContrRef = useRef("");
  const expectedReturnRef = useRef("");
  const durationRef = useRef("");

  const onSubmit = (event) => {
    event.preventDefault();

    const curSavings = +currSavingsRef.current.value;
    const yearlyContrib = +yearlyContrRef.current.value;
    const expReturn = +expectedReturnRef.current.value;
    const dur = +durationRef.current.value;

    const userInput = {
      "current-savings": curSavings,
      "yearly-contribution": yearlyContrib,
      "expected-return": expReturn,
      duration: dur,
    };
    onCalcSubmitHandler(userInput);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" ref={currSavingsRef} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" ref={yearlyContrRef} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" ref={expectedReturnRef} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" ref={durationRef} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" onClick={onCancel}>
          Calculate
        </button>
      </p>
    </form>
  );
}
