import { useState, useEffect } from 'react';

export default function UserForm({ onSave, editingUser, onCancel }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', age: '', email: '' });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email) return;
    onSave(form);
    setForm({ firstName: '', lastName: '', age: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-4">
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="w-full px-4 py-2 border rounded" />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="w-full px-4 py-2 border rounded" />
      <input name="age" value={form.age} onChange={handleChange} placeholder="Age" className="w-full px-4 py-2 border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 border rounded" />
      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">Cancel</button>
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          {editingUser ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
}
