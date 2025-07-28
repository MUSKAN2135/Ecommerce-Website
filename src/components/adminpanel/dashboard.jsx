// src/pages/Admindashboard.js
import React, { useState } from 'react';
import AdminNavbar from './adminbar'
export const Admindashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <AdminNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isMenuOpen ? 'ml-60' : 'ml-0'}`}>
        <div className="mt-20 px-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 shadow rounded text-center">
              <p className="text-gray-500">Earnings</p>
              <p className="text-2xl font-semibold text-blue-800">$628</p>
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              <p className="text-gray-500">Shares</p>
              <p className="text-2xl font-semibold">2434</p>
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              <p className="text-gray-500">Likes</p>
              <p className="text-2xl font-semibold">1259</p>
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              <p className="text-gray-500">Rating</p>
              <p className="text-2xl font-semibold">8.5</p>
            </div>
          </div>

          <div className="bg-white shadow rounded p-4 mb-6">
            <p className="font-semibold mb-2">Result Chart</p>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400">
              [Chart Placeholder]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold mb-2">Traffic</p>
              <div className="h-32 bg-gray-100 flex items-center justify-center text-gray-400">
                [Area Graph]
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold mb-2">Tasks</p>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
