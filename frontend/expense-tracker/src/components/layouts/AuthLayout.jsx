import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {title || "Authentication"}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
