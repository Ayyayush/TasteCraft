import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state ko initialize kiya, warna error aayega
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
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




/*
- Parent Constructor
- Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

<DOM UPDATED - BATCH>
    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount
*/