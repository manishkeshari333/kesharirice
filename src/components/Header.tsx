import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ background: "#4CAF50", padding: "10px 20px" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        {/* Left Side Logo/Text */}
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Mini Shakuntala Rice Mill
        </Link>

        {/* Right Side Login Button */}
        <Link
          to="/login"
          style={{
            background: "white",
            color: "#4CAF50",
            padding: "6px 12px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
