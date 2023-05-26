import React, { useState } from 'react';

const FuelForm = () => {
  const [fuelAmount, setFuelAmount] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');

  const handleFuelAmountChange = (e) => {
    setFuelAmount(e.target.value);
  };

  const handleFuelPriceChange = (e) => {
    setFuelPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz wykonać dowolne operacje na wprowadzonych danych, np. zapis do stanu lub wysłanie do API
    console.log('Fuel Amount:', fuelAmount);
    console.log('Fuel Price:', fuelPrice);
    setFuelAmount('');
    setFuelPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Amount of Fuel:</label>
        <input type="text" value={fuelAmount} onChange={handleFuelAmountChange} />
      </div>
      <div>
        <label>Price per Fuel Unit:</label>
        <input type="text" value={fuelPrice} onChange={handleFuelPriceChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FuelForm;
