import React from "react";

const loading = () => {
  return   <>
  <div className=" bg-gray-200 m-auto rounded-2xl  mb-2 max-w-[400px] my-4 h-12" />
  <div className="flex flex-wrap justify-center gap-4">
    {new Array(4).fill("loading").map((item, index) => {
      return (
        <div
          key={index}
          className="w-80 p-4 h-36 border rounded-lg shadow-md bg-white animate-pulse"
        >
          <div className="h-4 w-full bg-gray-200 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        </div>
      );
    })}
  </div>
  </>};

export default loading;
