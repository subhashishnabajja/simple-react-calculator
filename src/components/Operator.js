import { useCalc } from "../context/CalculatorContext";

const Operator = (props) => {
  const { addOperator } = useCalc();

  return (
    <button
      onClick={() => addOperator(props.children)}
      className={props.className || "font-red"}
    >
      {props.children}
    </button>
  );
};

export default Operator;
