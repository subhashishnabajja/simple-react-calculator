import Button from "./Button";
import Clear from "./Clear";
import Decimal from "./Decimal";
import Equal from "./Equal";
import Negate from "./Negate";
import Operator from "./Operator";
const Keypad = (props) => {
  return (
    <div className="keypad">
      <Clear />
      <Negate />
      <Operator className="font-green">%</Operator>
      <Operator>/</Operator>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Operator>*</Operator>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Operator>-</Operator>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Operator>+</Operator>
      <button>R</button>
      <Button>0</Button>
      <Decimal />
      <Equal />
    </div>
  );
};
export default Keypad;
