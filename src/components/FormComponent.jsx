import React from "react";

const FormComponent = ({ formData, handleChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission (refreshing the page)

    // Create a query string from form data
    const queryParams = new URLSearchParams(formData).toString();

    // Update the URL with query parameters (without reloading the page)
    window.history.pushState(null, "", `/?${queryParams}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
          />
        </label>
        <br />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <br />
        <label>
          Choose Country:
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={formData.dietaryRestrictions.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={formData.dietaryRestrictions.nutsFree}
            onChange={handleChange}
          />
          Nuts-Free
        </label>
        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={formData.dietaryRestrictions.lactoseFree}
            onChange={handleChange}
          />
          Lactose-Free
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
