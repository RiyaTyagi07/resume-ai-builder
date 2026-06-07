import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Builder from "./pages/Builder";
import EditResume from "./pages/EditResume";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Auth */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Resume Builder */}
        <Route
          path="/builder"
          element={<Builder />}
        />

        {/* Edit Resume */}
        <Route
          path="/edit/:id"
          element={<EditResume />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;