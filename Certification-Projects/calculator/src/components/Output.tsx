import React from 'react';
import '../assets/Output.css';

interface OutputProps {
    numbers: (number | string)[]; // Accept string as well
}

const Output: React.FC<OutputProps> = ({ numbers }) => {
    return (
        <div className="display-keys">
            <h1>
                {numbers.length === 0 ? 0 : numbers.map((number, index) => (
                    <span key={`${number}-${index}`} style={{ display: 'inline' }}>{number}</span>
                ))}
            </h1>
        </div>
    );
};
export default Output;
