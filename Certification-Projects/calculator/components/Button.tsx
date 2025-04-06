// Button.tsx
import React from 'react';
import '../assets/Button.css';

interface ButtonProps {
    label: number | string; // Accept string as well
    onClick: (value: number | string) => void; // Accept string as well
    id:string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, id }) => {
    return (
        <div>
           <button id={id}
onClick={() => {
          if (label === "C") {
            (onClick as () => void)(); // Call onClick without argument for "C"
          } else {
            onClick(label); // Call onClick with label for other buttons
          }
        }}
        className="button"
      >
        {label}
      </button>
        </div>
    );
};

export default Button;