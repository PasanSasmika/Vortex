import { Route, Router, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";


function App() {
  const { user } = useAuth();

  return (
    <>
   <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </>
  )
}

export default App
