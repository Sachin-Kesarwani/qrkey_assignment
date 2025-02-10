import Navbar from "@/components/navbar";
import PostCard from "@/components/postCard";
import Link from "next/link";

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 7200 }, 
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
  let posts = await getPosts();

  if (!posts) {
    return (
      <div className=" p-5 text-center text-red-500">
        <Navbar />
        <h2 className="text-2xl font-bold">
          Failed to load posts. Please try again.
        </h2>
      </div>
    );
  }

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-wrap justify-center gap-4">
        {posts.length > 0 ? (
          posts.map((item, index) => (
            <Link key={item.id} href={`/posts/${item.id}`}>
              <PostCard post={item} key={index} />
            </Link>
          ))
        ) : posts.length == 0 ? (
          <div>
            <p className="text-gray-400 text-center">No posts available</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default page;
