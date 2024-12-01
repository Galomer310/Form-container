# React Form Project

This is a simple React project showcasing a dynamic form with various input types, including text, number, radio, checkbox, and dropdown fields. The form allows users to input personal details and select dietary restrictions, updating the application state in real-time.

## Features

- **Dynamic Form Handling**:
  - Inputs for first name, last name, age, gender, and country selection.
  - Checkbox options for dietary restrictions (Vegan, Nuts-Free, Lactose-Free).
- **State Management**:
  - State is managed using React's `useState` hook.
  - Updates are applied dynamically as users interact with the form.
- **Custom URL Handling**:
  - Form data is encoded into query parameters and reflected in the URL without page reload.
- **Display Component**:
  - Form data is displayed in real-time in a separate component.

## Project Structure

```plaintext
src/
├── components/
│   ├── FormComponent.js  # Handles the form and user input
│   ├── DisplayData.js    # Displays submitted form data
├── App.js                # Main application logic
└── index.js              # Entry point of the application
