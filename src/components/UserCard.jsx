export default function UserCard({ user }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 transition hover:scale-105 duration-300">
        <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">Email: {user.email}</p>
      </div>
    );
  }