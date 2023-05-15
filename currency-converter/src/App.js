import React, { useState } from 'react';
import './App.css';
import CurrencySelector from './components/CurrencySelector';
import CurrencyInput from './components/CurrencyInput';
import ConversionResult from './components/ConversionResult';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleCurrencyChange = (event, type) => {
    if (type === 'from') {
      setFromCurrency(event.target.value);
    } else if (type === 'to') {
      setToCurrency(event.target.value);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async () => {
    const apiKey = '6042ac85113230e8e5112e15 ';
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (rate) {
        setResult((amount * rate).toFixed(2));
      } else {
        setResult('Nie można przeliczyć waluty.');
      }
    } catch (error) {
      setResult('Wystąpił błąd podczas pobierania danych.');
    }
  };

  // ...

return (
  <div className="App">
    <h1>Przelicznik walut</h1>
    <div className="currency-selector-container">
      <CurrencySelector value={fromCurrency} onChange={(e) => handleCurrencyChange(e, 'from')} />
      <CurrencyInput value={amount} onChange={handleAmountChange} />
      <CurrencySelector value={toCurrency} onChange={(e) => handleCurrencyChange(e, 'to')} />
    </div>
    <button onClick={handleSubmit}>Przelicz</button>
    <ConversionResult result={result} />
  </div>
);


}

export default App;
