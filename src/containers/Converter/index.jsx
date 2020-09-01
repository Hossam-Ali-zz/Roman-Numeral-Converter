import React, { useState } from 'react';
import Input from '../../components/Input';
import { deromanize, romanize } from '../../Helpers/numberConverters';
import './styles.scss';

const Converter = () => {
  const [romanNumber, setRomanNumber] = useState('');
  const [digitNunber, setDigitNumber] = useState(null);

  const handleInputChange = (value, type) => {
    if (type === 'text') setRomanNumber(value);
    else setDigitNumber(value);
  };

  return (
    <div className="container">
      <h1>Roman Numeral Converter</h1>
      <div className="converter-input-container">
        <div className="input-result-container">
          <p>Enter Roman Numerals</p>
          <Input
            type="text"
            placeholder="Roman"
            handleInputChange={handleInputChange}
          />
          {romanNumber.length > 0 && <h1>{deromanize(romanNumber)}</h1>}
        </div>
        <div className="input-result-container">
          <p>Enter English Number</p>
          <Input
            type="number"
            placeholder="English"
            min={1}
            handleInputChange={handleInputChange}
          />
          {digitNunber && <h1>{romanize(digitNunber)}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Converter;
