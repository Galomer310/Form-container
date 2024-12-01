import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import DisplayData from "./components/DisplayData";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
    dietaryRestrictions: { vegan: false, nutsFree: false, lactoseFree: false },
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        dietaryRestrictions: {
          ...prevData.dietaryRestrictions,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h1>Form and Data Display</h1>
      <FormComponent formData={formData} handleChange={handleChange} />
      <DisplayData formData={formData} />
    </div>
  );
};

export default App;
