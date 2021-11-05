import { useCalc } from "../context/CalculatorContext";

const Clear = (props) => {
  const {
    operandOne,
    setOperandOne,
    operandTwo,
    setOperandTwo,
    operator,
    setOperator,
  } = useCalc();

  const handleClick = () => {
    if (operator !== "" && operandTwo !== "") {
      setOperandTwo((o) => o.slice(0, -1));
    } else if (operator !== "") {
      setOperator("");
    } else if (operandOne !== "") {
      setOperandOne((o) => {
        const operand = o.slice(0, -1);
        if (operand === "") {
          return "0";
        } else {
          return operand;
        }
      });
    }
  };

  return (
    <button onClick={handleClick} className="font-green">
      {operandOne || operandTwo ? "C" : "AC"}
    </button>
  );
};

export default Clear;
