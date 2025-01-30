import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/login">Login with GitHub</Link>
    </div>
  );
};

export default Home;
