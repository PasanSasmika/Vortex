import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <span className="text-xl font-bold text-blue-600">User Betting Interface</span>
      <div className="flex gap-4 items-center">
        <span className="text-gray-700">Hi, {user.username}</span>
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
}
