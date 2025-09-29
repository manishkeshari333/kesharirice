import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with header + footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />   {/* Default page */}
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="order" element={<Order />} /> */}
          {/* <Route path="announcement" element={<Announcement />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
