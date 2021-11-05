import { useCalc } from "../context/CalculatorContext";

const Equal = (props) => {
  const {
    operandTwo,
    operator,
    operandOne,
    setOperandOne,
    setOperandTwo,
    setOperator,
    setOutput,
  } = useCalc();
  const handleClick = () => {
    if (operandOne && operator && operandTwo)
      setOutput((o) => {
        setOperandOne(o.toString());
        setOperator("");
        setOperandTwo("");
        return "";
      });
  };
  return (
    <button onClick={handleClick} className="font-red">
      =
    </button>
  );
};

export default Equal;
