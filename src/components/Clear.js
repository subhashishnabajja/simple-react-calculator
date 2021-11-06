import { useCalc } from "../context/CalculatorContext";

const Clear = (props) => {
  const { operandTwo, operandOne, clear } = useCalc();

  return (
    <button onClick={() => clear()} className="font-green">
      {operandOne || operandTwo ? "C" : "AC"}
    </button>
  );
};

export default Clear;
