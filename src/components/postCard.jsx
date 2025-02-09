import { memo } from "react";

const PostCard = ({ post }) => {
  return (
    <div className="max-w-80 p-4 h-36 border rounded-lg shadow-md bg-white">
      <h2
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
        }}
        className="text-lg font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-pre-line"
      >
        {post.title}
      </h2>
      <p
        className="text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-pre-line"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {post.body}
      </p>
    </div>
  );
};

export default memo(PostCard);
