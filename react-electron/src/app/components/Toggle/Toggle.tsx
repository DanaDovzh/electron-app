import React from 'react';
import './Toggle.sass';

type ToggleProps = {
  checked?: boolean;
  handler?: () => void;
}

const Toggle = ({
  handler = () => {},
}: ToggleProps) => {
  return (
    <label className="toggle">
      <input type="checkbox" 
        onChange={handler}
      />
      <span className="slider"></span>
    </label>
  );
}

export default Toggle;