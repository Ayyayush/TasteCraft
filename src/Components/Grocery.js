import React from 'react';

const Grocery = () => {
  return (
    <div className="grocery-container">
      <h1>Grocery Section</h1>
      <p>Welcome to our grocery delivery service!</p>
      <div className="grocery-features">
        <h2>Available Categories:</h2>
        <ul>
          <li>🥬 Fresh Vegetables</li>
          <li>🍎 Fresh Fruits</li>
          <li>🥛 Dairy Products</li>
          <li>🍞 Bakery Items</li>
          <li>🥫 Pantry Essentials</li>
          <li>🍗 Meat & Seafood</li>
        </ul>
      </div>
      <div className="grocery-info">
        <h3>Coming Soon!</h3>
        <p>We're working hard to bring you the best grocery delivery experience.</p>
      </div>
    </div>
  );
};

export default Grocery;
