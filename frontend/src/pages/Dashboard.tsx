import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetch user data from your backend (GitHub API)
    axios
      .get("http://localhost:5000/api/user", { withCredentials: true })
      .then((response: any) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}</p>
          <img src={user?.photos[0]?.value} alt="Avatar" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
