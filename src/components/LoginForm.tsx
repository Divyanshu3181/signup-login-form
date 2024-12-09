import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput } from './FormInput';
import { loginSchema } from '../utils/validation';
import { setEmail } from '../store/emailSlice';
import { LogIn } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const rememberedEmail = useSelector((state: any) => state.email.rememberedEmail);

  const initialValues = {
    email: rememberedEmail || '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    // Simulate API call
    setTimeout(() => {
      console.log('Login values:', values);
      if (values.rememberMe) {
        dispatch(setEmail(values.email)); // Persist email in Redux
      }
      alert('Login successful!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <LogIn className="w-8 h-8 text-blue-600" />
        <h2 className="ml-2 text-2xl font-bold text-gray-900">Login</h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
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
              placeholder="Enter your password"
            />

            <div className="flex items-center">
              <Field
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
