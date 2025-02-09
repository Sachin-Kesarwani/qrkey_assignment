import Navbar from "@/components/navbar";
import PostCard from "@/components/postCard";
import PostDetails from "@/components/postDetails";

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 7200 }, // Cache for 2 hours
  });

  if (!res.ok) {
    return null; // Handle errors
  }

  return res.json();
}

export default async function PostDetail({ params }) {
  const { id } = params;
  const post = await getUser(id);

  if (!post) {
    return <p>User not found.</p>;
  }

  return (
    <div className="">
      <Navbar />
     <PostDetails post={post}/>
    </div>
  );
}
