import React from "react";

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-6">
      <label
        className="mb-2 font-medium"
        htmlFor={`input-${label.toLowerCase()}`}
      >
        {label}
      </label>
      <input
        id={`input-${label.toLowerCase()}`}
        type={type}
        placeholder={placeholder}
        className="p-3 w-full text-base rounded-lg border border-solid border-zinc-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputField;
