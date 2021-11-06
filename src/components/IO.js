import { useCalc } from "../context/CalculatorContext";

const IO = (props) => {
  const { operandOne, operandTwo, operator, output } = useCalc();
  const expressionLen = (operandOne + operator + operandTwo).length;

  return (
    <div className="input-output">
      <div className={expressionLen >= 5 ? "font-lg" : "font-xl"}>
        {operandOne.includes("-") ? "(" + operandOne + ")" : operandOne}
        <span className="font-red">{operator}</span>
        {operandTwo.includes("-") ? "(" + operandTwo + ")" : operandTwo}
      </div>
      <div>{isNaN(parseFloat(output)) ? "0" : output}</div>
    </div>
  );
};

export default IO;
