import React from "react";

// Function expression for DisplayData
const DisplayData = ({ formData }) => {
  return (
    <div className="secondSection">
      <h2>Entered information:</h2>
      <p>Your Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Your Age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Destination: {formData.country}</p>
      <p>Your dietary Restrictions:</p>
      <ul>
        {formData.dietaryRestrictions.vegan && <li>Vegan</li>}
        {formData.dietaryRestrictions.nutsFree && <li>Nuts-Free</li>}
        {formData.dietaryRestrictions.lactoseFree && <li>Lactose-Free</li>}
      </ul>
    </div>
  );
};

export default DisplayData;
