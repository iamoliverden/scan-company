import React, { useState } from 'react';
import './Tonality.css'


const Tonality = ({ tonality, setTonality }) => {
    return (
      <div className="form-field form-field-inputs">
        <label htmlFor="tonality">Тональность</label>
        <div className="select-wrapper"> 
          <select id="tonality" name="tonality" value={tonality} onChange={(e) => setTonality(e.target.value)}>
            <option value="Любая">Any</option>
            <option value="Позитивная">Positive</option>
            <option value="Негативная">Negative</option>
          </select>
        </div>
      </div>
    );
};

export default Tonality;