import React, { FC } from "react";

interface DropdownProps {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  onSelect: (value: string) => void;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({ label, options, onSelect, className = "" }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {options.map((option) => (
          <li key={option.value}>
            <button className="dropdown-item" type="button" onClick={() => onSelect(option.value)}>
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

// for using this component just use like this
// <Dropdown label="Select a country" options={[{ value: "USA", label: "United States of America" }, { value: "CAN", label: "Canada" }, { value: "MEX", label: "Mexico" }]} onSelect={(value) => console.log(value)} className="my-2" />