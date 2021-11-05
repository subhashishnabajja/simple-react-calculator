import { useCalc } from "../context/CalculatorContext";

const Decimal = () => {
  const { setOperandOne, setOperandTwo, operator } = useCalc();
  const addDecimal = (state) => {
    if (state.includes(".")) {
      return state;
    } else {
      return state + ".";
    }
  };
  const handleClick = () => {
    if (operator !== "") {
      setOperandTwo(addDecimal);
    } else {
      setOperandOne(addDecimal);
    }
  };
  return <button onClick={handleClick}>.</button>;
};

export default Decimal;
