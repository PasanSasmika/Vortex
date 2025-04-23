import {  Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";


function App() {
  const { user } = useAuth();

  return (
    <>
   
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  </>
  )
}

export default App
