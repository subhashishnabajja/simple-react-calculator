import { useCalc } from "../context/CalculatorContext";

const Negate = (props) => {
  const { negateOperand } = useCalc();

  return (
    <button onClick={() => negateOperand()} className="font-green">
      +/-
    </button>
  );
};

export default Negate;
