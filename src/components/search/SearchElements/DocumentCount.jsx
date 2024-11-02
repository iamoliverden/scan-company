import React, { useState, useEffect } from 'react';
import './DocumentCount.css';

const DocumentCount = ({ documentCount, setDocumentCount }) => {
  const [error, setError] = useState('');

  const validateDocumentCount = () => {
    const count = parseInt(documentCount, 10);

    if (!documentCount) {
      setError("Mandatory field");
    } else if (isNaN(count) || count < 1) {
      setError("Enter correct input");
    } else if (count > 1000) {
      setError("Enter correct input");
    } else {
      setError("");
    }
  };

  useEffect(() => {
    validateDocumentCount();
  }, [documentCount]);

  return (
    <div className="form-field form-field-inputs">
      <label htmlFor="documentCount">Number of Documents in Results <span className={error ? "required-asterisk error" : "required-asterisk"}>*</span></label>
      <input
        type="number"
        id="documentCount"
        name="documentCount"
        className={error ? 'input-error' : ''}
        value={documentCount}
        onChange={(e) => {
          const newValue = e.target.value;
          setDocumentCount(newValue);
          validateDocumentCount();
        }}
        onBlur={validateDocumentCount}
        placeholder="min 1, max 1000"
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default DocumentCount;
