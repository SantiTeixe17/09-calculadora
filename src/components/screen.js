import { useAppContext } from "./calculatorState";

export default function Screen() {
  const calculator = useAppContext();

  return (
    <div className="calculatorScreen">
      <u><h1 className="calculatorh1">CALCULATOR</h1></u>
      <div>
        Memory: {calculator.memory} Op: {calculator.operation}
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? "." : ""}
      </div>
    </div>
  );
}
