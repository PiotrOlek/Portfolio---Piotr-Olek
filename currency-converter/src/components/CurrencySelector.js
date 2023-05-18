import React from 'react';
import usdIcon from '../assets/usd_icon.png';


const CurrencySelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="USD" data-icon={usdIcon}>
  USD
</option>

      <option value="EUR">EUR</option>
      {/* Dodaj więcej walut, jeśli chcesz */}
    </select>
  );
};


export default CurrencySelector;

