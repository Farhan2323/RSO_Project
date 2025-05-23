import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <svg
        className="animate-spin h-12 w-12 text-gray-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 6.627 5.373 12 12 12v-4a7.962 7.962 0 01-6-2.709z"
        ></path>
      </svg>
      <p className="text-xl text-gray-800 mt-4">Loading...</p>
    </div>
  );
};

export default LoadingPage;
