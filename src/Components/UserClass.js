import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state banaya, count ki initial value 0
    this.state = {
      count: 0,
    };
  }

  render() {
    // props aur state ko destructure kiya
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            // Kabhi bhi state ko direct update mat karo
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;