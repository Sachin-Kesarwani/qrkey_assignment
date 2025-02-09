import React, { memo } from "react";

const UserCard = ({ user, index }) => {
  return (
    <div
      key={index}
      className="w-full sm:w-80 h-80   cursor-pointer bg-white shadow-lg rounded-lg p-5 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-700">{user.email}</p>
      <div>
      <h3 className="text-md font-semibold text-gray-800"> User Id</h3>

      <p className="text-gray-500">{user.id}</p>

      </div>
      <div className="mt-3">
        <h3 className="text-md font-semibold text-gray-800">🏠 Address</h3>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city} -{" "}
          {user.address.zipcode}
        </p>
      </div>
       
      <div className="mt-3">
        <h3 className="text-md font-semibold text-gray-800">🏢 Company</h3>
        <p className="text-gray-600 font-bold">{user.company.name}</p>
        <p className="text-gray-500 italic">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default memo(UserCard);
