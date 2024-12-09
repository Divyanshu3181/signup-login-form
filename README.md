

# Login and Signup Page with Formik, Redux, and Tailwind CSS
This project implements a Login and Signup page on the same interface using React, Formik for form handling, Redux for state management, and Tailwind CSS for styling.

Features
🔄 Toggle Forms: Switch between the Login and Signup forms using buttons.
✅ Formik Integration: Form handling with validation.
🔐 Password Strength Indicator: Visual strength indicator for password inputs.
🗃️ Redux for State Management: Save and retrieve the remembered email.
🎨 Tailwind CSS Styling: Responsive and clean UI.
Technologies Used
React: Component-based UI development.
Formik: Form handling and validation.
Yup: Schema-based validation for forms.
Redux Toolkit: State management (e.g., for "Remember Me").
Tailwind CSS: Utility-first styling framework.
Lucide React: Icons for UI components.
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/Divyanshu3181/signup-login-form.git
cd react-login-signup
2. Install Dependencies
Ensure you have Node.js and npm or yarn installed. Run:

bash
Copy code
npm install
# or
yarn install
3. Set Up Tailwind CSS
Make sure Tailwind CSS is properly configured:

tailwind.config.js:
javascript
Copy code
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
Add Tailwind directives to index.css:
css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;
4. Run the Application
Start the development server:

bash
Copy code
npm start
# or
yarn start
The app will open at http://localhost:3000.

Folder Structure
graphql
Copy code
src/
│
├── components/
│   ├── FormInput.tsx       # Reusable form input component
│   ├── LoginForm.tsx       # Login form component
│   ├── SignUpForm.tsx      # Signup form component
│   ├── PasswordStrength.tsx # Password strength indicator
│
├── store/
│   ├── store.ts            # Redux store configuration
│   ├── emailSlice.ts       # Redux slice for managing email state
│
├── utils/
│   └── validation.ts       # Yup validation schemas and utilities
│
├── App.tsx                 # Main application component
├── index.tsx               # ReactDOM render setup
├── index.css               # Tailwind CSS styles
│
└── types/
    └── auth.ts             # TypeScript interfaces for forms
Usage
Login Page:

Enter email and password.
Check "Remember Me" to save the email for future logins.
Signup Page:

Enter name, email, password, and confirm the password.
A password strength indicator dynamically updates as you type.
Toggle Forms:

Use the Login and Sign Up buttons to switch between the forms.
Validation
Yup is used to validate the form inputs:

Login Form:

Email: Required and must be valid.
Password: Required.
Signup Form:

Name: Required.
Email: Required and must be valid.
Password: Required and must be strong.
Confirm Password: Must match the password.