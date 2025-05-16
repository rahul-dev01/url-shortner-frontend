const FullNameInput = ({ setFullName }) => {
  return (
    <div className="fullname-input-container">
      <label htmlFor="fullname-input">Full Name</label><br />
      <input
        onChange={(e) => setFullName(e.target.value)}
        id="fullname-input"
        type="text"
        placeholder="Enter your full name"
      />
    </div>
  );
};

export default FullNameInput;
