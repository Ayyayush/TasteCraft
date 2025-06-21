import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("Parent Component Did Mount");
   }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>About Class Component</h2>
        <h3>This is My Restaurant</h3>
        <UserClass name="Ayush'Tastecraft" location="Jamshedpur" />
      </div>
    );
  }
}

export default About;