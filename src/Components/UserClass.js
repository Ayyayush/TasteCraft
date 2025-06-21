import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state banaya, count aur count2 ke liye
    this.state = {
      count: 0,   // count ki initial value 0
      count2: 2,  // count2 ki initial value 2
    };
  }

  render() {
    // props ko destructure kiya (name, location)
    const { name, location } = this.props;
    // state ko destructure kiya (count)
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Count: {count}</h2> {/* count value dikhaya */}
        <h2>Name: {name}</h2> {/* name prop dikhaya */}
        <h3>Location: {location}</h3> {/* location prop dikhaya */}
        <h4>Contact: @akshay</h4> {/* static contact info dikhaya */}
      </div>
    );
  }
}

export default UserClass;