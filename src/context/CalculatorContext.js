import React from "react";

const CalculatorContext = React.createContext({});

const CalculatorProvider = (props) => {
  const [operandOne, setOperandOne] = React.useState("0");
  const [operandTwo, setOperandTwo] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [output, setOutput] = React.useState("");
  const value = {
    operandOne,
    setOperandOne,
    operandTwo,
    setOperandTwo,
    operator,
    setOperator,
    output,
    setOutput,
  };

  React.useEffect(() => {
    if (operandOne && operandTwo) {
      switch (operator) {
        case "+":
          setOutput(parseFloat(operandOne) + parseFloat(operandTwo));
          break;
        case "-":
          setOutput(parseFloat(operandOne) - parseFloat(operandTwo));
          break;
        case "*":
          setOutput(parseFloat(operandOne) * parseFloat(operandTwo));
          break;
        case "/":
          setOutput(parseFloat(operandOne) / parseFloat(operandTwo));
          break;
        case "%":
          setOutput(parseFloat(operandOne) % parseFloat(operandTwo));
          break;
        default:
          setOutput(parseFloat(operandOne));
          break;
      }
    } else {
      setOutput(operandOne);
    }
  }, [operandOne, operandTwo, operator]);

  return (
    <CalculatorContext.Provider value={value}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

const useCalc = () => {
  return React.useContext(CalculatorContext);
};

export { CalculatorProvider, useCalc };
