import Navbar from "@/components/navbar";
import UserDetails from "@/components/userDetails";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 7200 }, // Cache for 2 hours
  });

  if (!res.ok) {
    return null; // Handle errors
  }

  return res.json();
}

export default async function UserDetail({ params }) {
  const { id } = params;
  const user = await getUser(id);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="">
      <Navbar />
      <UserDetails user={user} />
    </div>
  );
}
