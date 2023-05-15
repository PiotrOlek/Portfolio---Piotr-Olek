import React from 'react';

const CurrencyInput = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      step="0.01"
      min="0"
      placeholder="Wprowadź kwotę"
    />
  );
};

export default CurrencyInput;
