export default function UserCard({ user, onEdit, onDelete }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-4 transition hover:scale-105 duration-300 space-y-2">
        <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
        <p className="text-gray-600">Age: {user.age}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={() => onEdit(user)} className="text-blue-600 hover:underline">Edit</button>
          <button onClick={() => onDelete(user.id)} className="text-red-500 hover:underline">Delete</button>
        </div>
      </div>
    );
  }
  