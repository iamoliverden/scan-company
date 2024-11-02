import React from 'react';
import './CheckboxBlock.css';

const CheckboxBlock = ({ checkboxStates, handleCheckboxChange }) => {
  const labels = {
  maxCompleteness: "Indicator of maximum completeness",
  businessMentions: "Mentions in a business context",
  mainRole: "Main role in the publication",
  riskFactorsOnly: "Publications only with risk factors",
  includeMarketNews: "Include technical market news",
  includeAnnouncements: "Include announcements and calendars",
  includeNewsSummaries: "Include news summaries",
  };

  return (
    <div className="right-part-search-checkbox-block">
      {Object.keys(checkboxStates).map((key) => (
        <div key={key} className="checkbox-container">
          <input
            type="checkbox"
            id={`checkbox-${key}`}
            name={key}
            checked={checkboxStates[key]}
            onChange={handleCheckboxChange}
            className="hidden-checkbox"
          />
          <label htmlFor={`checkbox-${key}`} className={checkboxStates[key] ? "checked-label" : ""}>
            <span className="custom-checkbox"></span>
            <span className="label-text">{labels[key]}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxBlock;
