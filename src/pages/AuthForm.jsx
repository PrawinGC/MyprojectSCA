import React, { useState } from "react";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import ToggleViewLink from "../components/ToggleViewLink";

function AuthForm() {
  const [isSignupView, setIsSignupView] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const toggleView = () => {
    setIsSignupView((prev) => !prev);
  };

  return (
    <div className="px-5 py-10 mx-auto my-0 max-w-[400px]">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-stone-800">
          {isSignupView ? "Create Account" : "Welcome"}
        </h1>
        <p className="text-base text-stone-500">Connect with your community</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl bg-[white] shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
      >
        <InputField
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
        />
        <PasswordField
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
        />
        {isSignupView && (
          <InputField
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(value) => handleInputChange("name", value)}
          />
        )}
        <Button type="submit">{isSignupView ? "Sign up" : "Log in"}</Button>
        <div className="mt-6 text-center">
          <a className="no-underline text-stone-500" href="/forgot-password">
            Forgot password?
          </a>
        </div>
      </form>
      <ToggleViewLink isSignupView={isSignupView} onToggle={toggleView} />
    </div>
  );
}

export default AuthForm;
