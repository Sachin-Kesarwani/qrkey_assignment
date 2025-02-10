import React from "react";

const loading = () => {
  return (
    <>
      <div className=" bg-gray-200 m-auto rounded-2xl  mb-2 w-[400px] my-4 h-12" />
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300 animate-pulse">
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
        <div className="mt-4 bg-gray-100 p-3 rounded-md">
          <div className="h-5 w-1/3 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
        <div className="mt-4 bg-gray-100 p-3 rounded-md">
          <div className="h-5 w-1/3 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default loading;
