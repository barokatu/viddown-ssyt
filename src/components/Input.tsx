import React, { FC } from "react";

interface InputProps {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox";
  options?: string[];
  className?: string;
}

const Input: FC<InputProps> = ({ id, label, type, options = [], className = "" }) => {
  const renderInput = () => {
    switch (type) {
      case "text":
        return <input type="text" className="form-control" id={id} />;
      case "textarea":
        return <textarea className="form-control" id={id} />;
      case "select":
        return (
          <select className="form-select" id={id}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id={id} />
            <label className="form-check-label" htmlFor={id}>
              {label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};

export default Input;

// for using this component just use like this
// <Input id="name" label="Name" type="text" className="my-2" />
{/* <Input id="description" label="Description" type="textarea" className="my-2" />
<Input id="country" label="Country" type="select" options={["USA", "Canada", "Mexico"]} className="my-2" />
<Input id="terms" label="I agree to the terms and conditions" type="checkbox" className="my-2" /> */}