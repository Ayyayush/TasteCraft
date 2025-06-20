import { useRouteError } from "react-router";


const error = () => {
    const err = useRouteError();
    console.error(err);
  return (
    <div style={{ color: "red", margin: "2rem" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
    </div>
  );
}

export default error;