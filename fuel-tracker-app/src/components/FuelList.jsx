import React, { useState } from 'react';

const FuelList = () => {
  const [fuelData, setFuelData] = useState([]);

  const addFuelData = (fuelAmount, fuelPrice) => {
    const newFuelData = [...fuelData, { fuelAmount, fuelPrice }];
    setFuelData(newFuelData);
  };

  return (
    <div>
      <h2>Fuel Data List</h2>
      <table>
        <thead>
          <tr>
            <th>Amount of Fuel</th>
            <th>Price per Fuel Unit</th>
          </tr>
        </thead>
        <tbody>
          {fuelData.map((data, index) => (
            <tr key={index}>
              <td>{data.fuelAmount}</td>
              <td>{data.fuelPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelList;
