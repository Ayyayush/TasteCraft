import UserContext from "../../utils/UserContext";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  async componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <h2 className="text-xl text-gray-600 mb-8">Welcome to Our Restaurant</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to our culinary journey! We are passionate about bringing you the finest dining experience 
              with carefully crafted dishes that celebrate flavors from around the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality ingredients, exceptional service, and creating memorable moments 
              makes us more than just a restaurant - we're a destination for food lovers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Meet Our Team</h3>
            <div className="flex justify-center">
              <UserContext.Consumer>
                {({ loggedInUser }) => (
                  <h4 className="text-lg font-bold text-gray-700 mb-4">
                    LoggedIn User: {loggedInUser}
                  </h4>
                )}
              </UserContext.Consumer>
              <UserClass name="Ayush Pandey" location="Jamshedpur" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;