function PersonalInfo({ data, handleChange, nextStep }) {
  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        value={data.dob}
        onChange={handleChange}
      />

      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default PersonalInfo;