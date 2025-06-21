import React from "react";
import Shimmer from "./Shimmer"; // Shimmer ko import karo

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // state ko initialize kiya, warna error aayega
    this.state = {
      userInfo: {
        name: "Ayyayush",
        location: "Jamshedpur",
        avatar_url: "https://avatars.githubusercontent.com/u/140370865?v=4",
      },
      loading: true, // loading state add kiya
    };
  }

  async componentDidMount() {
    // API call kiya GitHub user info ke liye
    const data = await fetch("https://api.github.com/users/Ayyayush");
    const json = await data.json();
    console.log(json);

    // state ko update kiya API se aayi value se
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url, // avatar_url bhi update kiya
      },
      loading: false, // loading false kar diya
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    // Cleanup code yahan likh sakte ho
    console.log("Component Will Unmount");
    // Agar koi event listeners ya timers hain, unhe yahan clear kar sakte ho
  }

  render() {
    // state se name, location, avatar_url, loading destructure kiya
    const { name, location, avatar_url } = this.state.userInfo;
    const { loading } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        {/* Agar loading hai toh Shimmer dikhaye, warna avatar dikhaye */}
        {loading ? (
          <Shimmer />
        ) : (
          <img src={avatar_url} alt="User Avatar" className="user-avatar" />
        )}
        <h3>Location: {location}</h3>
        <h4>Contact: @treddytech</h4>
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