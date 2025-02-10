import React from "react";

const loading = () => {
  return (
    <>
    <div className=" bg-gray-200 m-auto rounded-2xl  mb-2 max-w-[400px] my-4 h-12"/>
    <div className="flex flex-wrap justify-center gap-4">
      {new Array(6).fill("loading").map((item, index) => {
        return (
          <div
            key={index}
            className="w-full sm:w-80 h-80 cursor-pointer bg-white shadow-lg rounded-lg p-5 border border-gray-200 animate-pulse"
          >
            <div className="h-5 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-1/3 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-full bg-gray-200 rounded"></div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default loading;
