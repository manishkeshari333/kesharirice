import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet /> {/* yahan child route page load hoga */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
