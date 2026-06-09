import { useState } from "react";

import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import Review from "./components/Review";

function App() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log(formData);
    setSubmitted(true);
  };

  if (submitted) {
  return (
    <div className="container success">
      <h1>🎉 Registration Successful</h1>
      <p>Your profile has been created successfully.</p>
    </div>
  );
}

const validateStep2 = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setError("");
  nextStep();
};

  return (
    <div className="container">
      <h1>Profile Setup</h1>

      <p>Step {step} of 3</p>

      {step === 1 && (<PersonalInfo
          data={formData}
          handleChange={handleChange}
           nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <AccountDetails
  data={formData}
  handleChange={handleChange}
  nextStep={validateStep2}
  prevStep={prevStep}
  error={error}
/>
      )}

      {step === 3 && (
        <Review
          data={formData}
           prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;