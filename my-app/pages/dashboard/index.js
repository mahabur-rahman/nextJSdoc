import { useState, useEffect } from "react";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    async function fetchDashboard() {
      const res = await fetch(`http://localhost:4000/dashboard`);

      const data = await res.json();

      console.log(data);

      setDashboard(data);
      setIsLoading(false);
    }

    fetchDashboard();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Dashboard page</h1>
      <br />

      <h2>POSTS: {dashboard.posts}</h2>
      <h2>likes : {dashboard.likes}</h2>
      <h2>Followers: {dashboard.followers}</h2>
      <h2>Following: {dashboard.following}</h2>
    </>
  );
}

export default Dashboard;
