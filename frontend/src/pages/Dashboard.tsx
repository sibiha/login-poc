import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Extract access_token from the query parameters of the URL
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
    console.log("accessToken")
    console.log(accessToken)

    if (accessToken) {
      axios
        .get("http://localhost:5000/api/user/" + accessToken, { withCredentials: true })
        .then((response: any) => {
          console.log(response);
          setUser(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.login}</p>
          <img src={user?.avatar_url} alt="Avatar" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
