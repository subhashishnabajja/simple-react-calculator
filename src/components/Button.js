import { useCalc } from "../context/CalculatorContext";

const Button = (props) => {
  const { appendOperand } = useCalc();

  return (
    <button onClick={() => appendOperand(props.children)}>
      {props.children}
    </button>
  );
};

export default Button;
