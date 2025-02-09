import React from 'react'

const PostDetails = ({post}) => {
  return (
    <div className="flex justify-center">
    <div className="rounded max-w-80">
      <h2 className="text-lg font-bold text-gray-800 overflow-hidden text-ellipsis whitespace-pre-line">
        {post.title}
      </h2>
      <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-pre-line">
        {post.body}
      </p>
    </div>
  </div>
  
  )
}

export default PostDetails
