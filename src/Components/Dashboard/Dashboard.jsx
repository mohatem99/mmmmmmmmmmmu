import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome to Admin Page
        </h1>
        <p className="text-gray-600">
          Manage your dashboard and settings here.
        </p>
      </div>
    </div>
  );
}
