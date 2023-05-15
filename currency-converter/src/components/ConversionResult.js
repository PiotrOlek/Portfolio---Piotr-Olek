import React from 'react';

const ConversionResult = ({ result }) => {
  return (
    <div>
      {result && (
        <p>
          <strong>Wynik: </strong> {result}
        </p>
      )}
    </div>
  );
};

export default ConversionResult;
