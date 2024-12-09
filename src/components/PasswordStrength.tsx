import React from 'react';
import { getPasswordStrength } from '../utils/validation';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const strength = getPasswordStrength(password);
  
  const getStrengthColor = () => {
    if (strength <= 25) return 'bg-red-500';
    if (strength <= 50) return 'bg-orange-500';
    if (strength <= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="mt-1">
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className={`h-full rounded-full transition-all duration-300 ${getStrengthColor()}`}
          style={{ width: `${strength}%` }}
          role="progressbar"
          aria-valuenow={strength}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="text-sm text-gray-600 mt-1">
        Password strength: {strength === 100 ? 'Strong' : strength >= 75 ? 'Good' : strength >= 50 ? 'Fair' : 'Weak'}
      </p>
    </div>
  );
};