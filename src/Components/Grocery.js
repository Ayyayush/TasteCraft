import React from 'react';

const Grocery = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Grocery Section</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome to our grocery delivery service!</p>
      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Available Categories:</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🥬 Fresh Vegetables</li>
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🍎 Fresh Fruits</li>
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🥛 Dairy Products</li>
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🍞 Bakery Items</li>
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🥫 Pantry Essentials</li>
          <li className="flex items-center text-green-700 bg-white p-3 rounded shadow">🍗 Meat & Seafood</li>
        </ul>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Coming Soon!</h3>
        <p className="text-blue-700">We're working hard to bring you the best grocery delivery experience.</p>
      </div>
    </div>
  );
};

export default Grocery;
