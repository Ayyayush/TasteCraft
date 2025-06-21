import { useState } from "react";

// User component with destructuring and useState
const User = ({ name }) => {
  // count state banaya, initial value 0
  const [count] = useState(0);
  // count2 state banaya, initial value 1
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1> {/* count value dikhaya */}
      <h1>Count 2: {count2}</h1> {/* count2 value dikhaya */}
      <h2>Name: {name}</h2> {/* name prop dikhaya */}
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};

export default User;