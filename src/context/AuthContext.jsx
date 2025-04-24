// context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const register = (username, password) => {
    const exists = registeredUsers.find((u) => u.username === username);
    if (exists) return { success: false, message: 'Username already exists' };

    setRegisteredUsers([...registeredUsers, { username, password }]);
    return { success: true };
  };

  const login = (username, password) => {
    const existing = registeredUsers.find(
      (u) => u.username === username && u.password === password
    );
    if (existing) {
      setUser({ username });
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
