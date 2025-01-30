import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    // Redirect to GitHub OAuth for authentication
    window.location.href = "http://localhost:5000/auth/github"; // Your backend route
  }, []);

  return <div>Redirecting to GitHub...</div>;
};

export default Login;
