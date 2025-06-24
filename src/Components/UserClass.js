import React from "react";
import Shimmer from "./Shimmer"; // Shimmer ko import karo

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state ko initialize kiya, warna error aayega
    this.state = {
      userInfo: {
        name: "Ayush Pandey",
        location: "Jamshedpur",
        avatar_url: "https://avatars.githubusercontent.com/u/140370865?v=4",
      },
      loading: true, // loading state add kiya
    };
  }
  async componentDidMount() {
    try {
      // API call kiya GitHub user info ke liye
      const data = await fetch("https://api.github.com/users/Ayyayush");
      
      if (!data.ok) {
        throw new Error('Failed to fetch user data');
      }
      
      const json = await data.json();
      console.log(json);

      // state ko update kiya API se aayi value se
      this.setState({
        userInfo: {
          name: json.name || "Ayush Pandey",
          location: json.location || "Jamshedpur",
          avatar_url: json.avatar_url || "https://avatars.githubusercontent.com/u/140370865?v=4",
        },
        loading: false, // loading false kar diya
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Keep default values and stop loading
      this.setState({
        loading: false,
      });
    }
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // Cleanup code yahan likh sakte ho
    console.log("Component Will Unmount");
    // Agar koi event listeners ya timers hain, unhe yahan clear kar sakte ho
  }

  render() {    // state se name, location, avatar_url, loading destructure kiya
    const { name, location, avatar_url } = this.state.userInfo;
    const { loading } = this.state;
    
    return (
      <div className="user-card max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Name: {name}</h2>
        {/* Agar loading hai toh Shimmer dikhaye, warna avatar dikhaye */}
        {loading ? (
          <Shimmer />
        ) : (
          <img 
            src={avatar_url} 
            alt="User Avatar" 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 object-cover" 
          />
        )}
        <h3 className="text-lg text-gray-600 mb-2">
          Location: {location || "Not specified"}
        </h3>
        <h4 className="text-md text-gray-500">Contact: @treddytech</h4>
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






/****
 *
 * ---- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 * <HTML Dummy >
 * Component Did Mount
 *   <API Call>
 *   <this.setState> => State variable is updated
 *
 * ---- UPDATE ----
 *
 * render(API data)
 * <HTML (new API data)>
 * componentDidUpdate
 *
 */