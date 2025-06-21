import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is TasteCraft</h2>
      {/* <User name={"AYUSH🚀"} /> */}
      <UserClass />
      <h4>
        We are a food delivery service that
      </h4>
    </div>
  );
};

export default About;