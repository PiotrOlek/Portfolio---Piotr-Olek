import React from 'react';
import FuelForm from './components/FuelForm';
import FuelList from './components/FuelList';

const App = () => {
  return (
    <div>
      <h1>Fuel Tracker App</h1>
      <FuelForm />
      <FuelList />
    </div>
  );
};

export default App;
