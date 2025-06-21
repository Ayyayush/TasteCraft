const User = (props) => {
  return (
    <div className="user-card">
      <h3>Name: {props.name}</h3>
      <h4>Location : Jamshedpur</h4>
      <h5>Contact: @treddytalks</h5>
    </div>
  );
};

export default User;