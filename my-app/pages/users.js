import User from "@/components/user";

function Users({ users }) {
  return (
    <>
      <h2>User page</h2>

      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Users;

// fetch data using getStaticProps

export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
