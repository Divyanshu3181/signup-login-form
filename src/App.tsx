import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignUpForm } from './components/SignUpForm';

function App() {
  const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login'); // Toggle state

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Buttons to toggle Login/Signup */}
      <div className="w-full max-w-md mb-8">
        <div className="flex rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveForm('login')}
            className={`flex-1 py-2 text-center font-medium transition-colors duration-200 ${
              activeForm === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveForm('signup')}
            className={`flex-1 py-2 text-center font-medium transition-colors duration-200 ${
              activeForm === 'signup'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Conditional Rendering of Forms */}
      {activeForm === 'login' ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}

export default App;
