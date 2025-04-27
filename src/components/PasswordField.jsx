import React, { useState } from "react";

function PasswordField({ value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative mb-6">
      <label className="mb-2 font-medium font-color = black" htmlFor="input-password">
        Password
      </label>
      <input
        id="input-password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        className="p-3 w-full text-base rounded-lg border border-solid border-zinc-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
<<<<<<< HEAD
=======
        className="absolute right-3 text-white cursor-pointer border-[none] top-[38px]"
>>>>>>> 4663541 (Second commit)
        onClick={togglePasswordVisibility}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default PasswordField;
