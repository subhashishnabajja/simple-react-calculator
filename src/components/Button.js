import { useCalc } from "../context/CalculatorContext";

const Button = (props) => {
  const { setOperandOne, setOperandTwo, operator } = useCalc();
  const getOperand = (state) => {
    let newOperand = "";

    if (state.length === 10) {
      newOperand = state;
    } else {
      newOperand = parseFloat(state + props.children).toString();
    }

    return newOperand;
  };
  const handleClick = () => {
    if (operator) {
      setOperandTwo((o) => getOperand(o));
    } else {
      setOperandOne((o) => getOperand(o));
    }
  };

  return <button onClick={handleClick}>{props.children}</button>;
};

export default Button;
