import React from "react";

function Button({ children, type = "button", onClick }) {
  return (
    <button
      type={type}
      className="p-3.5 w-full text-base font-extrabold bg-violet-500 rounded-full border border-none transition-all cursor-pointer border-[black] duration-[0.2s] text-[white]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
