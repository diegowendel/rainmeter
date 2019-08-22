import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/index';
import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner">
      <FontAwesomeIcon className="spinnerIcon" icon={faSpinner} size="2x" spin />
    </div>
  );
}

export default Spinner;
