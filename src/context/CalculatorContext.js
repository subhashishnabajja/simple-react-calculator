/* eslint-disable */
import React from "react";

const CalculatorContext = React.createContext({});

const CalculatorProvider = (props) => {
  const [operandOne, setOperandOne] = React.useState("0");
  const [operandTwo, setOperandTwo] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [output, setOutput] = React.useState("");

  const calculate = () => {
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
  };

  const appendOperand = (num) => {
    const getOperand = (state) => {
      let newOperand = "";

      if (state.length === 10) {
        newOperand = state;
      } else if (state.includes(".")) {
        newOperand = state + num;
      } else {
        newOperand = parseFloat(state + num).toString();
      }

      return newOperand;
    };
    if (operator) {
      setOperandTwo(getOperand);
    } else {
      setOperandOne(getOperand);
    }
  };

  const addOperator = (op) => {
    if (operator === "") {
      setOperator(op);
    } else {
      setOperandOne(output.toString());
      setOperator(op);
      setOperandTwo("");
      setOutput("");
    }
  };

  const addDecimal = () => {
    const decimalize = (state) => {
      if (state.includes(".")) {
        return state;
      } else {
        return state + ".";
      }
    };

    if (operator !== "") {
      setOperandTwo(decimalize);
    } else {
      setOperandOne(decimalize);
    }
  };

  const getOutput = () => {
    if (operandOne && operator && operandTwo)
      setOutput((o) => {
        setOperandOne(o.toString());
        setOperator("");
        setOperandTwo("");
        return "";
      });
  };

  const negateOperand = () => {
    const negateNumber = (number) => {
      if (!number.includes("-")) {
        return `-${number}`;
      } else {
        return number.slice(1, number.length);
      }
    };
    if (operator) {
      setOperandTwo(negateNumber);
    } else {
      setOperandOne(negateNumber);
    }
  };

  const clear = () => {
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

  const value = {
    appendOperand,
    addOperator,
    getOutput,
    addDecimal,
    negateOperand,
    clear,
    operandOne,
    operandTwo,
    operator,
    output,
  };

  React.useEffect(() => {
    calculate();
  }, [operandOne, operator, operandTwo]);

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
