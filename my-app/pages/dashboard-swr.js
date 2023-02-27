import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch(`http://localhost:4000/dashboard`);
  const data = await res.json();

  return data;
};

function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return `An error has occurred`;

  if (!data) return `Loading...`;

  return (
    <>
      <h1>SWR Dashboard</h1>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
    </>
  );
}

export default DashboardSWR;
