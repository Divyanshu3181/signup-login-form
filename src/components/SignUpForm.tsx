import React from 'react';
import { Formik, Form } from 'formik';
import { FormInput } from './FormInput';
import { PasswordStrength } from './PasswordStrength';
import { signUpSchema } from '../utils/validation';
import { SignUpValues } from '../types/auth';
import { UserPlus } from 'lucide-react';

const initialValues: SignUpValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const SignUpForm: React.FC = () => {
  const handleSubmit = (values: SignUpValues, { setSubmitting, resetForm }: any) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Sign up values:', values);
      alert('Sign up successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <UserPlus className="w-8 h-8 text-blue-600" />
        <h2 className="ml-2 text-2xl font-bold text-gray-900">Sign Up</h2>
      </div>
      
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className="space-y-4">
            <FormInput
              label="Name"
              name="name"
              placeholder="Enter your name"
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="Create a password"
            />
            <PasswordStrength password={values.password} />
            <FormInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};