import React from 'react';
import { Field, ErrorMessage } from 'formik';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setEmail } from '../store/emailSlice';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <Field name={name}>
        {({ field, meta }: { field: any; meta: any }) => (
          <input
            {...field}
            type={type}
            id={name}
            placeholder={placeholder}
            onChange={(e) => {
              field.onChange(e);
              if (name === 'email') {
                dispatch(setEmail(e.target.value)); // Dispatch action for email state
              }
            }}
            className={clsx(
              "w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
              meta.touched && meta.error ? "border-red-500" : "border-gray-300"
            )}
            aria-describedby={meta.touched && meta.error ? `${name}-error` : undefined}
          />
        )}
      </Field>
      <ErrorMessage name={name}>
        {(msg) => (
          <p className="mt-1 text-sm text-red-600" id={`${name}-error`} role="alert">
            {msg}
          </p>
        )}
      </ErrorMessage>
    </div>
  );
};
