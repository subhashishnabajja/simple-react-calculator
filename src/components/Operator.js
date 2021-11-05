import { useCalc } from "../context/CalculatorContext";

const Operator = (props) => {
  const {
    operator,
    setOperator,
    output,
    setOutput,
    setOperandOne,
    setOperandTwo,
  } = useCalc();

  const handleClick = () => {
    if (operator === "") {
      setOperator(props.children);
    } else {
      setOperandOne(output.toString());
      setOperator(props.children);
      setOperandTwo("");
      setOutput("");
    }
  };
  return (
    <button onClick={handleClick} className={props.className || "font-red"}>
      {props.children}
    </button>
  );
};

export default Operator;
