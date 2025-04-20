import React from "react";

function ToggleViewLink({ isSignupView, onToggle }) {
  return (
    <div className="mt-6 text-center">
      <p>
        <span>
          {isSignupView ? "Already have an account?" : "Don't have an account?"}
        </span>
        <button
          className="ml-2 font-extrabold cursor-pointer border-[none]  text-white"
          onClick={onToggle}
        >
          {isSignupView ? "Log in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}

export default ToggleViewLink;
