import Navbar from "@/components/navbar";
import UserCard from "@/components/userCard";
import Link from "next/link";

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users" ,  {
      next: { revalidate: 7200 }, // Cache for 2 hours
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null; 
  }
}

const page = async () => {
  let users = await getUsers();

  if (!users) {
    return (
      <div className="border border-red-600 p-5 text-center text-red-500">
        <Navbar />
        <h2 className="text-2xl font-bold">
          Failed to load users. Please try again.
        </h2>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4">
        {users?.length>0 ?users.map((item, index) => (
          <Link key={item.id} href={`/users/${item.id}`}>
            <UserCard user={item} key={index} />
          </Link>
        )):users?.length==0?<div>
           <p className="text-gray-400 text-center">No users available</p>
        </div>:null}
      </div>
    </div>
  );
};

export default page;
