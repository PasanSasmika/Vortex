import {  Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  const { user } = useAuth();

  return (
    <>
   
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
   
  </>
  )
}

export default App
