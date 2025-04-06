import { useState } from 'react';
import Keys from './components/Keys';
import './App.css';
import Output from './components/Output';

function App() {
  const [numbers, setNumbers] = useState<number[]>([0]);

  const handleButtonClick = (value: number) => {
    setNumbers(prevNumbers => {
      const firstIsZero = prevNumbers.length === 1 && prevNumbers[0] === 0;
      return firstIsZero ? [value] : [...prevNumbers, value];
    });
  };

  const clearDisplay = () => {
    setNumbers([]); // Set the numbers state to an empty array to clear everything
  };

  const equalsButton = () => {
    const result = eval(numbers.join(''));
    setNumbers([result]);
  };

  

  const num = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className="calculator">
      <Output numbers={numbers} />
      <Keys result={num} onButtonClick={handleButtonClick} clearDisplay={clearDisplay} equalsButton={equalsButton}/>
   
    </div>
  );
}

export default App;