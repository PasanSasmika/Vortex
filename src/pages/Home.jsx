import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import UserForm from '../components/UserForm';
import Navbar from '../components/NavBar';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        setUsers(data.users);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };
    fetchUsers();
  }, []);

  // Save (Add or Update)
  const handleSave = (userData) => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...userData, id: editingUser.id } : u));
    } else {
      const newUser = { ...userData, id: Date.now() };
      setUsers([newUser, ...users]);
    }
    setShowForm(false);
    setEditingUser(null);
  };

  // Delete user
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  // Filter users
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">User List</h1>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* User Cards */}
        {loading ? (
          <p>Loading users...</p>
        ) : filteredUsers.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p>No users found.</p>
        )}
      </div>

      {/* Add User Button */}
      <button
        onClick={() => { setShowForm(true); setEditingUser(null); }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        + Add User
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl">
            <UserForm
              onSave={handleSave}
              editingUser={editingUser}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
