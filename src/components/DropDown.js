import React from "react";
import './index.css'

const Dropdown = ({ title }) => {
    return (
      <div className="dropdown">
        <select className="dropdown-select">
          <option value="">{title}</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    );
  };

  export default Dropdown