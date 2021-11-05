import "./App.css";
import IO from "./components/IO";
import Keypad from "./components/Keypad";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <div className="calculator-body">
          <IO />
          <Keypad />
        </div>
      </CalculatorProvider>
    </div>
  );
}

export default App;
