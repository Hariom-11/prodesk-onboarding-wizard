function AccountDetails({
  data,
  handleChange,
  nextStep,
  prevStep,
}) {
  return (
    <div>
      <h2>Account Details</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={data.confirmPassword}
        onChange={handleChange}
      />

      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default AccountDetails;