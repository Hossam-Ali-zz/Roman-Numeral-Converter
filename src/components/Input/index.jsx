import React from 'react';
import './styles.scss';

const Input = ({ type, handleInputChange, ...rest }) => (
  <input
    className="input"
    type={type}
    onChange={(e) => handleInputChange(e.target.value, type)}
    {...rest}
  />
);

export default Input;
