import { useCalc } from "../context/CalculatorContext";

const Negate = (props) => {
  const { operator, setOperandOne, setOperandTwo } = useCalc();
  const negateNumber = (number) => {
    if (!number.includes("-")) {
      return `-${number}`;
    } else {
      return number.slice(1, number.length);
    }
  };
  const handleClick = () => {
    if (operator) {
      setOperandTwo(negateNumber);
    } else {
      setOperandOne(negateNumber);
    }
  };
  return (
    <button onClick={handleClick} className="font-green">
      +/-
    </button>
  );
};

export default Negate;
