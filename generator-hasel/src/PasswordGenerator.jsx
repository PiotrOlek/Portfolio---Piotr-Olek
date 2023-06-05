import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './PasswordGenerator.css';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordLength, setPasswordLength] = useState(8);
  const [otp, setOtp] = useState('');
  const [useLowercase, setUseLowercase] = useState(true);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSpecialCharacters, setUseSpecialCharacters] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] = useState(true);

  useEffect(() => {
    setIsGenerateButtonDisabled(!useLowercase && !useUppercase && !useNumbers && !useSpecialCharacters);
  }, [useLowercase, useUppercase, useNumbers, useSpecialCharacters]);

  function generatePassword() {
    setIsLoading(true);

    if (!useLowercase && !useUppercase && !useNumbers && !useSpecialCharacters) {
      alert('Musisz zaznaczyć przynajmniej jeden typ znaków!');
      setIsLoading(false);
      return;
    }

    let charset = '';
    if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) charset += '0123456789';
    if (useSpecialCharacters) charset += '!@#$%^&*()_+=-[]{};:,.<>?';

    let newPassword = '';
    for (let i = 0, n = charset.length; i < passwordLength; ++i) {
      newPassword += charset[Math.floor(Math.random() * n)];
    }

    setTimeout(() => {
      setPassword(newPassword);
      setPasswordStrength(evaluatePasswordStrength(newPassword));
      setIsLoading(false);
    }, 500);
  }

  function evaluatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[a-z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[!@#$%^&*()_+=-[]{};:,.<>?]/)) strength++;
    return strength;
  }

  function generateOTP() {
    setIsLoading(true);

    let otp = '';
    for (let i = 0; i < 6; ++i) {
      otp += Math.floor(Math.random() * 10);
    }

    setTimeout(() => {
      setOtp(otp);
      setIsLoading(false);
    }, 500);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => alert('Skopiowano do schowka!'))
      .catch((error) => console.error('Błąd kopiowania: ', error));
  }

  return (
    <div className="password-generator-container">
      <h2>Password Generator</h2>
      <label>
        Długość hasła:
        <input
          type="number"
          min="1"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
      </label>
      <div className="options-grid">
        <label>
          Użyj małych liter:
          <input
            type="checkbox"
            checked={useLowercase}
            onChange={(e) => setUseLowercase(e.target.checked)}
          />
        </label>
        <label>
          Użyj dużych liter:
          <input
            type="checkbox"
            checked={useUppercase}
            onChange={(e) => setUseUppercase(e.target.checked)}
          />
        </label>
        <label>
          Użyj cyfr:
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
          />
        </label>
        <label>
          Użyj znaków specjalnych:
          <input
            type="checkbox"
            checked={useSpecialCharacters}
            onChange={(e) => setUseSpecialCharacters(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={generatePassword} disabled={isGenerateButtonDisabled}>
        Generuj hasło
      </button>
      <ClipLoader color={'#123abc'} loading={isLoading} size={50} />
      <input type="text" value={password} readOnly />
      <div className="password-strength-bar">
        <div
          style={{
            width: `${passwordStrength * 25}%`,
            backgroundColor: passwordStrength === 0 ? '#ccc' : passwordStrength === 1 ? 'red' : passwordStrength === 2 ? 'yellow' : 'green',
          }}
        />
      </div>
      <button onClick={() => copyToClipboard(password)}>Kopiuj hasło</button>
      <button onClick={generateOTP}>Generuj OTP</button>
      <ClipLoader color={'#123abc'} loading={isLoading} size={50} />
      <input type="text" value={otp} readOnly />
      <button onClick={() => copyToClipboard(otp)}>Kopiuj OTP</button>
    </div>
  );
}

export default PasswordGenerator;
