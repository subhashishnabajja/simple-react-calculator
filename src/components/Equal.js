import { useCalc } from "../context/CalculatorContext";

const Equal = (props) => {
  const { getOutput } = useCalc();
  return (
    <button onClick={() => getOutput()} className="font-red">
      =
    </button>
  );
};

export default Equal;
