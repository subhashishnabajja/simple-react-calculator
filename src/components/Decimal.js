import { useCalc } from "../context/CalculatorContext";

const Decimal = () => {
  const { addDecimal } = useCalc();

  return <button onClick={() => addDecimal()}>.</button>;
};

export default Decimal;
