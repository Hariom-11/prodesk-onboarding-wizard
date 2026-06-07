function Review({
  data,
  prevStep,
  handleSubmit,
}) {
  return (
    <div>
      <h2>Review Details</h2>

      <div className="review-item">
  <strong>First Name:</strong> {data.firstName}
</div>

<div className="review-item">
  <strong>Last Name:</strong> {data.lastName}
</div>

<div className="review-item">
  <strong>Date of Birth:</strong> {data.dob}
</div>

<div className="review-item">
  <strong>Email:</strong> {data.email}
</div>

      <div>
        <button onClick={prevStep}>Back</button>

        <button onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Review;