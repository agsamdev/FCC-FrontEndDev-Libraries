import '../assets/Keys.css';
import Button from './Button';

interface KeysProps {
  onButtonClick: (value: number | string) => void; // Accept string as well
  result: (number | string)[];
  clearDisplay: () => void; // Add a function to clear the display
  equalsButton: () => void; // Add a function for equals button
}

const Keys: React.FC<KeysProps> = ({ onButtonClick, result, clearDisplay, equalsButton}) => {
  return (
    <div className="keys-container">


      <div className="numbers">
        {result.map((resultValue) => (
          <Button id={`button-${resultValue}`} // Unique ID for each button
        key={String(resultValue)} // Ensure key is always a string
        label={String(resultValue)} // Convert to string for display
        onClick={() => {
          onButtonClick(resultValue);
        }}
          />
        ))}
      </div>

   
      
      <div className="operators">
        <Button id="clear" key={"clearButton"} label={"AC"} onClick={clearDisplay} />
        <Button id="equals" key={"equalsButton"} label={"="} onClick={equalsButton} />
        <Button id="add" key={"addButton"} label={"+"} onClick={() => onButtonClick("+")} />
        <Button id="subtract" key={"subtractButton"} label={"-"} onClick={() => onButtonClick("-")} />
        <Button id="multiply" key={"multiplyButton"} label={"*"} onClick={() => onButtonClick("*")} />
        <Button id="divide" key={"divideButton"} label={"/"} onClick={() => onButtonClick("/")} /> 
      </div>

      
      </div>
      
  );
};

export default Keys;
