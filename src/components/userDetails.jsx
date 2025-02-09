const UserDetails = ({ user }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-4">
        <p className="text-gray-600">
          📧 <span className="font-medium">{user.email}</span>
        </p>
        <p className="text-gray-600">
          📞 <span className="font-medium">{user.phone}</span>
        </p>
        <p className="text-gray-600">
          🌍{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-4 bg-gray-100 p-3 rounded-md">
        <h3 className="text-lg font-medium text-gray-700">📍 Address</h3>
        <p className="text-gray-600">
          {user.address.suite}, {user.address.street}
        </p>
        <p className="text-gray-600">
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="mt-4 bg-gray-100 p-3 rounded-md">
        <h3 className="text-lg font-medium text-gray-700">🏢 Company</h3>
        <p className="text-gray-600 font-semibold">{user.company.name}</p>
        <p className="text-gray-500 italic">"{user.company.catchPhrase}"</p>
        <p className="text-gray-600">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserDetails;
